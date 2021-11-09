using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Options;
using SATEvening.BLL.Services.Interfaces;
using SATEvening.BLL.Settings;
using SATEvening.DAL.Models;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace SATEvening.BLL.Services
{
    public class EmailService : IEmailService
    {
        private readonly AuthMessageSenderOptions _senderOptions;
        private readonly LinkGenerator _linkGenerator;
        private readonly UserManager<AppUser> _userManager;
        private readonly IHttpContextAccessor _accessor;

        public EmailService(IOptions<AuthMessageSenderOptions> sendOptions, LinkGenerator linkGenerator,
            UserManager<AppUser> userManager, IHttpContextAccessor accessor)
        {
            _senderOptions = sendOptions.Value;
            _linkGenerator = linkGenerator;
            _userManager = userManager;
            _accessor = accessor;
        }

        public Task SendEmailAsync(AppUser user)
        {
            return Execute(user);
        }

        private async Task Execute(AppUser user)
        {
            var client = new SendGridClient(_senderOptions.Key);

            var emailToken = await GenerateConfirmationEmailToken(user);
            var confirmEmailUrl = GenerateConfirmEmailUrl(emailToken, user);

            var msg = CreateMessageWithUrlToRecipient(user, confirmEmailUrl);

            await client.SendEmailAsync(msg);
        }

        private async Task<string> GenerateConfirmationEmailToken(AppUser user)
        {
            return await _userManager.GenerateEmailConfirmationTokenAsync(user);
        }

        private string GenerateConfirmEmailUrl(string code, AppUser user)
        {
            return _linkGenerator.GetUriByAction(
                _accessor.HttpContext,
                action: "ConfirmEmail",
                controller: "Account",
                values: new { userId = user.Id, code = code }
            );
        }

        private SendGridMessage CreateMessageWithUrlToRecipient(AppUser user, string callbackUrl)
        {
            var message = new SendGridMessage()
            {
                From = new EmailAddress(_senderOptions.SenderEmail),
            };

            message.AddTo(new EmailAddress(user.Email));
            message.SetTemplateId(_senderOptions.TemplateId);
            message.SetTemplateData(new
            {
                name = user.FirstName,
                url = callbackUrl
            });

            return message;
        }
    }
}
