using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using SATEvening.BLL.Services.Interfaces;
using SATEvening.BLL.Settings;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace SATEvening.BLL.Services
{
    public class EmailService : IEmailService
    {
        private readonly AuthMessageSenderOptions _senderOptions;

        public EmailService(IOptions<AuthMessageSenderOptions> sendOptions)
        {
            _senderOptions = sendOptions.Value;
        }

        public Task SendEmailAsync(string email)
        {
            return Execute(email);
        }

        private Task Execute(string email)
        {
            var client = CreateClient();
            var msg = CreateMessageToRecipient(email);

            return client.SendEmailAsync(msg);
        }

        private SendGridClient CreateClient()
        {
            return new SendGridClient(_senderOptions.Key);
        }

        private SendGridMessage CreateMessageToRecipient(string email)
        {
            var message = new SendGridMessage()
            {
                From = new EmailAddress(_senderOptions.SenderEmail),
            };

            message.AddTo(new EmailAddress(email));
            message.SetTemplateId(_senderOptions.TemplateId);

            return message;
        }
    }
}
