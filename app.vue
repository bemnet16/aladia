<template>
  <div class="flex items-center justify-center text-white h-screen bg-black">
    <OrgAuthCard
      v-if="authStage === 'login'"
      @submitLogin="handleLoginSubmit"
    />
    <LoginPasswordCard
      v-else-if="authStage === 'login-password'"
      :emailIn="enteredEmail"
      @forgotPassword="handleForgotPassword"
      @submitPassword="handlePasswordSubmit"
    />
    <OrgSignupCard
      v-else-if="authStage === 'register'"
      :emailIn="enteredEmail"
      @submitRegistration="handleRegistrationSubmit"
    />
    <OrgVerificationCard
      :userName="userName"
      v-else-if="authStage === 'verification'"
    />
    <OrgRecoveryCard
      v-else-if="authStage === 'password-recovery'"
      :recoveryEmail="enteredEmail"
      @submitRecovery="handlePasswordRecoverySubmit"
    />
    <OrgConfirmation
      v-else-if="authStage === 'password-recovery-confirmation'"
      :recoveryEmail="enteredEmail"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import OrgSignupCard from "./components/organisms/OrgSignupCard.vue";
import OrgAuthCard from "./components/organisms/OrgAuthCard.vue";
import OrgVerificationCard from "./components/organisms/OrgVerificationCard.vue";
import OrgRecoveryCard from "./components/organisms/OrgRecoveryCard.vue";
import OrgConfirmation from "./components/organisms/OrgConfirmation.vue";

const database = ref([
  {
    email: "test@example.com",
    password: "password123!",
    name: "Test",
    surname: "User",
  },
  {
    email: "bemnet@gmail.com",
    password: "password456!",
    name: "Bemnet",
    surname: "User",
  },
]);

const authStage = ref("login");

const enteredEmail = ref("");
const userName = ref("");
const profilePicture = ref("");

function handleLoginSubmit(email) {
  enteredEmail.value = email;
  console.log(email, "done!");

  const userExists = database.value.some((user) => user.email === email);

  if (userExists) {
    authStage.value = "login-password";
  } else {
    authStage.value = "register";
  }
}

function handlePasswordSubmit(password) {
  const user = database.value.find(
    (user) => user.email === enteredEmail.value && user.password === password
  );

  if (user) {
    console.log("Login successful for:", enteredEmail.value);
    alert("Login successful!");
  } else {
    console.error("Invalid password.");
    alert("Invalid password, please try again.");
  }
}

function handleRegistrationSubmit(user) {
  const { email, password, name, surname, profileImage } = user;
  userName.value = `${name} ${surname}`;
  profilePicture.value = `${profileImage}`;
  database.value.push({ email, password });

  authStage.value = "verification";
}

function handleForgotPassword() {
  authStage.value = "password-recovery";
}

function handlePasswordRecoverySubmit(email) {
  enteredEmail.value = email;
  console.log("Password recovery initiated for:", email);

  authStage.value = "password-recovery-confirmation";
}
</script>
