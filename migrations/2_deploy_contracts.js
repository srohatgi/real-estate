module.exports = function(deployer) {
  deployer.autolink();
  deployer.deploy(NotarizeDocument);
};
