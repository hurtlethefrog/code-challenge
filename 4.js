const registerToVote = (name, unregisteredVoters) => {
unregisteredVoters.splice(unregisteredVoters.indexOf(name), 1)
return unregisteredVoters 
}
