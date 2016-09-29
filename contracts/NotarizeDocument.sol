
// @title Notarize Document
contract NotarizeDocument {

  mapping (bytes32 => bool) public notarized;
  
  // calculate and store the proof for a document
  // *transactional function*
  function notarize(string document) {
      var proof = calculateProof(document);
      notarized[proof] = true;
  }
                  
  // helper function to get a document's sha256
  // *read-only function*
  function calculateProof(string document) constant returns (bytes32) {
      return sha256(document);
  }
                                
  // find if a document has been notarized before
  // *read-only function*
  function isNotarized(string document) constant returns (bool) {
      return notarized[calculateProof(document)];
  }
}
