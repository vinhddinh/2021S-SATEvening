using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Moq;
using SATEvening.BLL.Models;
using SATEvening.BLL.Services;
using SATEvening.BLL.Services.Interfaces;
using SATEvening.DAL.Models;
using SATEvening.Web.Controllers;
using Xunit;

namespace SATEvening.Web.Tests
{
    public class AccountControllerTests
    {
        private readonly Mock<UserManager<AppUser>> _mockUserManager;
        private readonly Mock<SignInManager<AppUser>> _mockSignInManager;
        private readonly AccountController _controller;

        public AccountControllerTests()
        {
            _mockUserManager = GetUserManager();
            _mockSignInManager = GetSignInManager();
            var authService = new AuthService(_mockUserManager.Object, _mockSignInManager.Object);
            _controller = new AccountController(authService);
        }

        #region Registration

        [Fact]
        public async Task ValidRegistrationDetailsShouldReturnOkResponse()
        {
            var user = new UserRequestModel { Email = "test@uts.edu.au", UserName = "test123", FirstName = "test", LastName = "me", Password = "1@testL" };
            _mockUserManager.Setup(m => m.CreateAsync(It.IsAny<UserRequestModel>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Success);

            var result = await _controller.Register(user);

            Assert.NotNull(result);
            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async Task RegisterFailureShouldReturnBadResponse()
        {
            var user = new UserRequestModel { Email = "", UserName = "test123", FirstName = "test", LastName = "me", Password = "1@testL" };
            _mockUserManager.Setup(m => m.CreateAsync(It.IsAny<UserRequestModel>(), It.IsAny<string>())).ReturnsAsync(
                IdentityResult.Failed(new IdentityError { Description = "registration failure with asp.net identity" }));
           
            var result = await _controller.Register(user);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        [Fact]
        public async Task InvalidRegistrationDetailsShouldReturnBadResponse()
        {
            var user = new UserRequestModel { Email = "test@uts.edu.au", UserName = "test123", FirstName = "test", LastName = "me", Password = "thispasswordistoosimple" };
            _mockUserManager.Setup(m => m.CreateAsync(It.IsAny<UserRequestModel>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Failed(new IdentityError { Description = "password does not meet requirements" }));

            var result = await _controller.Register(user);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        #endregion

        #region SignIn

        [Fact]
        public async Task CorrectLoginDetailsShouldReturnOkResponse()
        {
            var login = new LoginRequestModel { UserName = "test123", Password = "1@testL" };
            var user = new AppUser { Email = "test@uts.edu.au", UserName = "test123" };

            _mockSignInManager.Setup(s => s.PasswordSignInAsync(It.IsAny<AppUser>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>())).ReturnsAsync(Microsoft.AspNetCore.Identity.SignInResult.Success);
            _mockUserManager.Setup(m => m.FindByNameAsync(It.IsAny<string>())).ReturnsAsync(user);

            var result = await _controller.Login(login);

            Assert.NotNull(result);
            Assert.IsType<OkObjectResult>(result);
        }

        #endregion

        #region MockManager

        private Mock<UserManager<AppUser>> GetUserManager()
        {
            var mockUserStore = new Mock<IUserStore<AppUser>>();
            var mockUserManager = new Mock<UserManager<AppUser>>(mockUserStore.Object, null, null, null, null, null, null, null, null);

            return mockUserManager;
        }

        private Mock<SignInManager<AppUser>> GetSignInManager()
        {
            var mockUserStore = new Mock<IUserStore<AppUser>>();
            var mockUserManager = new Mock<UserManager<AppUser>>(mockUserStore.Object, null, null, null, null, null, null, null, null);
            var mockContextAccessor = new Mock<IHttpContextAccessor>();
            var mockUserPrincipalFactory = new Mock<IUserClaimsPrincipalFactory<AppUser>>();

            var mockSignInManager = new Mock<SignInManager<AppUser>>(mockUserManager.Object, mockContextAccessor.Object, mockUserPrincipalFactory.Object, null, null, null, null);

            return mockSignInManager;
        }

        #endregion
    }
}
