const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");
const profile = document.getElementById("profile");

const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");

const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");

const profileLink = document.getElementById("profileLink");

// GitHub API URL
const API_URL = "https://api.github.com/users/";

let debounceTimer;

async function fetchUser(usernameValue) {

  const username = usernameValue.trim();

  if (!username) {
      showError("Please enter a GitHub username.");
      return;
  }

  hideError();
  profile.classList.add("hidden");

  loading.classList.remove("hidden");

  try {

    const response = await fetch(API_URL + encodeURIComponent(username));

    if (!response.ok) {

      if (response.status === 404) {
          throw new Error("GitHub user not found.");
      }

      if (response.status === 403) {
          throw new Error("API rate limit exceeded. Please try again later.");
      }

      throw new Error("Something went wrong. Please try again.");

    }

    const userData = await response.json();

    displayUser(userData);

  } catch (err) {

    showError(err.message);

  } finally {
    loading.classList.add("hidden");
  }
}


// Display user information
function displayUser(userData) {

  avatar.src = userData.avatar_url;
  avatar.alt = `${userData.login}'s profile picture`;

  name.textContent = userData.name || userData.login;
  username.textContent = `@${userData.login}`;
  bio.textContent = userData.bio || "No bio available.";
  repos.textContent = userData.public_repos;
  followers.textContent = userData.followers;
  following.textContent = userData.following;
  profileLink.href = userData.html_url;
  profile.classList.remove("hidden");
}


// Show error
function showError(message) {

  error.textContent = message;
  error.classList.remove("hidden");
  profile.classList.add("hidden");
}

function hideError() {
  error.textContent = "";
  error.classList.add("hidden");
}

searchBtn.addEventListener("click", () => {
  fetchUser(usernameInput.value);

});



usernameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    fetchUser(usernameInput.value);
  }
});


usernameInput.addEventListener("input", () => {

  clearTimeout(debounceTimer);

  const value = usernameInput.value.trim();

  if (!value) {
      hideError();
      profile.classList.add("hidden");
      return;
  }

  debounceTimer = setTimeout(() => {
    fetchUser(value);
  }, 700);

});