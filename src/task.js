function sortHeroesByHealth(arr) {
  return arr.sort((a, b) => b.health - a.health);
}

export default sortHeroesByHealth;
