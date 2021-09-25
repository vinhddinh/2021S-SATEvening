using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Moq;
using SATEvening.BLL.Models;
using SATEvening.DAL.Models;
using SATEvening.Web.Controllers;
using SATEvening.Web.Models;
using Xunit;

namespace SATEvening.Web.Tests
{
    public class AccountControllerTests
    {
        public AccountControllerTests()
        {

        }

        #region Registration

        [Fact]
        public async Task ValidRegistrationDetailsShouldReturnOkResponse()
        {
            var user = new UserModel { Email = "test@uts.edu.au", UserName = "test123", FirstName = "test", LastName = "me", Password = "1@testL" };

            var mockUserManager = GetUserManager();

            mockUserManager.Setup(m => m.CreateAsync(It.IsAny<User>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Success);

            var controller = new AccountController(mockUserManager.Object, null);

            var result = await controller.Register(user);

            Assert.NotNull(result);
            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async Task MissingRegistrationDetailsShouldReturnBadResponse()
        {
            var user = new UserModel { Email = "", UserName = "test123", FirstName = "test", LastName = "me", Password = "1@testL" };

            var mockUserManager = GetUserManager();

            mockUserManager.Setup(m => m.CreateAsync(It.IsAny<User>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Failed(new IdentityError { Description = "model is null or missing details" }));

            var controller = new AccountController(mockUserManager.Object, null);

            var result = await controller.Register(user);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        [Fact]
        public async Task InvalidRegistrationDetailsShouldReturnBadResponse()
        {
            var user = new UserModel { Email = "test@uts.edu.au", UserName = "test123", FirstName = "test", LastName = "me", Password = "thispasswordistoosimple" };

            var mockUserManager = GetUserManager();

            mockUserManager.Setup(m => m.CreateAsync(It.IsAny<User>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Failed(new IdentityError { Description = "password does not meet requirements" }));

            var controller = new AccountController(mockUserManager.Object, null);

            var result = await controller.Register(user);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        #endregion

        #region SignIn

        [Fact]
        public async Task CorrectLoginDetailsShouldReturnOkResponse()
        {
            var login = new UserLoginModel { UserName = "test123", Password = "1@testL" };

            var user = new User { Email = "test@uts.edu.au", UserName = "test123", FirstName = "test", LastName = "me" };

            var mockSignInManager = GetSignInManager();
            var mockUserManager = GetUserManager();


            mockSignInManager.Setup(s => s.PasswordSignInAsync(It.IsAny<User>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>())).ReturnsAsync(Microsoft.AspNetCore.Identity.SignInResult.Success);

            mockUserManager.Setup(m => m.FindByNameAsync(It.IsAny<string>())).ReturnsAsync(user);

            var controller = new AccountController(mockUserManager.Object, mockSignInManager.Object);

            var result = await controller.Login(login);

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
