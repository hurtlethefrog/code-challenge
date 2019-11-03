const castVote = (name, votes) => {
switch(name) {
  case "Tim":
    votes[0]+=1;
    return votes;
  case "Sally":
    votes[1]+=1;
    return votes;
  case "Beth":
    votes[2]+=1;
    return votes;
  default:
    return "Please vote for somone onthe ballot";
}
};
