const personDetails = {
  Alice: "Alice is a software engineer with 5 years of experience in web development.",
  Bob: "Bob is a product manager who loves building innovative solutions and leading teams.",
  Taylor: "Taylor is a UI/UX designer passionate about creating beautiful user experiences."
};

export function fetchBio(person) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(personDetails[person] || "No bio available for this person.");
    }, 2000);
  });
}
