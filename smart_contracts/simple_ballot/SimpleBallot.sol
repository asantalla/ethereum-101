pragma solidity ^0.4.16;

contract SimpleBallot {
    
    struct Voter {
        bool hasVoted;
        bool hasRightToVote;
    }

    struct Proposal {
        uint number;
        uint voteCount;
    }

    address public creator;

    Proposal[] public proposals;
    mapping(address => Voter) public voters;

    function SimpleBallot(uint[] proposalNumbers) public {
        creator = msg.sender;

        for (uint i = 0; i < proposalNumbers.length; i++) {
            proposals.push(
                Proposal({
                    number: proposalNumbers[i],
                    voteCount: 0
                })
            );
        }
    }

    function giveRightToVote(address person) public {
        // In this case, `storage` acts as a pointer
        Voter storage voter = voters[person];
        
        require(msg.sender == creator && !voter.hasVoted && !voter.hasRightToVote);
        
        voter.hasVoted = false;
        voter.hasRightToVote = true;
    }

    function vote(uint proposalNumber) public {
        address person = msg.sender;
        Voter storage voter = voters[person];
        
        require(person != creator && !voter.hasVoted && voter.hasRightToVote);

        for (uint i = 0; i < proposals.length; i++) {
            if (proposals[i].number == proposalNumber) {
                proposals[i].voteCount += 1;
            }
        }
        voter.hasVoted = true;
    }

    // Functions can be declared `view` in which case they promise not to modify the state.
    function winningProposal() public view returns (uint) {
        require(msg.sender == creator);
        
        uint maxVotedCount = 0;
        Proposal memory maxVotedProposal;

        for (uint i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > maxVotedCount) {
                maxVotedCount = proposals[i].voteCount;
                maxVotedProposal = proposals[i]; 
            }
        }

        return maxVotedProposal.number;
    }
}