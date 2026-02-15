const userDetails = {
  Pankaj: "He is a Software Developer",
  Khushi: "She is into Fashion Designing",
  Raj: "He is into UI/UX",
};

export function fetchDetails(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userDetails[user] || "No bio is available for this user");
    }, 4000);
  });
}
