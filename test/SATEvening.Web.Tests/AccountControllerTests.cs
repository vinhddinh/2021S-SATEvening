using System;
using System.Net;
using System.Threading.Tasks;
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

            var mockUserStore = new Mock<IUserStore<AppUser>>();
            var mockUserManager = new Mock<UserManager<AppUser>>(mockUserStore.Object, null, null, null, null, null, null, null, null);

            mockUserManager.Setup(m => m.CreateAsync(It.IsAny<User>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Success);

            var controller = new AccountController(mockUserManager.Object);

            var result = await controller.Register(user);

            Assert.NotNull(result);
            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async Task MissingRegistrationDetailsShouldReturnBadResponse()
        {
            var user = new UserModel { Email = "", UserName = "test123", FirstName = "test", LastName = "me", Password = "1@testL" };

            var mockUserStore = new Mock<IUserStore<AppUser>>();
            var mockUserManager = new Mock<UserManager<AppUser>>(mockUserStore.Object, null, null, null, null, null, null, null, null);

            mockUserManager.Setup(m => m.CreateAsync(It.IsAny<User>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Failed(new IdentityError { Description = "model is null or missing details" }));

            var controller = new AccountController(mockUserManager.Object);

            var result = await controller.Register(user);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        [Fact]
        public async Task InvalidRegistrationDetailsShouldReturnBadResponse()
        {
            var user = new UserModel { Email = "test@uts.edu.au", UserName = "test123", FirstName = "test", LastName = "me", Password = "thispasswordistoosimple" };

            var mockUserStore = new Mock<IUserStore<AppUser>>();
            var mockUserManager = new Mock<UserManager<AppUser>>(mockUserStore.Object, null, null, null, null, null, null, null, null);

            mockUserManager.Setup(m => m.CreateAsync(It.IsAny<User>(), It.IsAny<string>())).ReturnsAsync(IdentityResult.Failed(new IdentityError { Description = "password does not meet requirements" }));

            var controller = new AccountController(mockUserManager.Object);

            var result = await controller.Register(user);

            Assert.NotNull(result);
            Assert.IsType<BadRequestObjectResult>(result);
        }

        #endregion
    }
}
