using System;
using System.Collections.Generic;
using System.Linq;
using Moq;
using SATEvening.BLL.Models;
using SATEvening.BLL.Services;
using SATEvening.DAL.Models;
using SATEvening.DAL.Repository;
using Xunit;

namespace SATEvening.BLL.Tests.Services
{
    public class UsersServiceTests
    {
        private readonly Mock<IUsersRepository> _usersRepository;
        private readonly List<AppUser> _users;
        private readonly IUsersService UsersService;

        public UsersServiceTests()
        {
            _users = new List<AppUser>
            {
                new AppUser
                {
                    Id = "1",
                    Email = "test@uts.edu.au",
                },
            };

            _usersRepository = new Mock<IUsersRepository>();

            _usersRepository.Setup(x => x.GetAll()).Returns(_users);

            _usersRepository.Setup(x => x.GetByEmail(It.IsAny<string>())).Callback((string email) => _users.Find(u => u.Email == email));

            _usersRepository.Setup(x => x.Create(It.IsAny<AppUser>(), It.IsAny<string>())).Callback((AppUser user, string password) => _users.Add(user));

            _usersRepository.Setup(x => x.Update(It.IsAny<AppUser>())).Callback((AppUser user) => _users[_users.FindIndex(u => u.Id == user.Id)] = user);

            _usersRepository.Setup(x => x.Delete(It.IsAny<AppUser>())).Callback((AppUser user) => _users.RemoveAll(u => u.Id == user.Id));

            UsersService = new UsersService();
        }

        [Fact]
        public void ShouldGetAllUsers()
        {
            var users = UsersService.GetAll();

            _usersRepository.Verify(x => x.GetAll(), Times.Once);

            Assert.Single(users);
        }

        [Theory]
        [InlineData("test@uts.edu.au")]
        public void ShouldGetUserByEmail(string email)
        {
            _usersRepository.Verify(x => x.GetByEmail(email), Times.Once);

            var users = UsersService.GetAll();

            Assert.Equal("1", users.First().Id);
            Assert.Equal(email, users.First().Email);

            Assert.Equal(2, users.Count());
        }

        [Fact]
        public void ShouldAddUser()
        {
            var user = new User
            {
                Id = Guid.NewGuid().ToString(),
                Email = "tutor@uts.edu.au",
            };

            UsersService.Create(user, "mypassword");

            _usersRepository.Verify(x => x.Create(It.IsAny<AppUser>(), It.IsAny<string>()), Times.Once);

            var users = UsersService.GetAll();

            Assert.Equal(2, users.Count());
        }

        [Fact]
        public void ShouldUpdateUser()
        {
            var user = new User
            {
                Id = "1",
                Email = "test@uts.edu.au",
                PhoneNumber = "1234567890"
            };

            UsersService.Update(user);

            _usersRepository.Verify(x => x.Update(It.IsAny<AppUser>()), Times.Once);

            var users = UsersService.GetAll();

            Assert.Equal("1234567890", users.FirstOrDefault().PhoneNumber);
        }

        [Fact]
        public void ShouldDeleteUser()
        {
            var user = new User
            {
                Id = "1",
                Email = "tutor@uts.edu.au",
            };

            UsersService.Delete(user);

            _usersRepository.Verify(x => x.Delete(It.IsAny<AppUser>()), Times.Once);

            Assert.Empty(UsersService.GetAll());
        }
    }
}
