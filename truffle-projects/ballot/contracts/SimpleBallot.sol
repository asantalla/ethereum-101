pragma solidity ^0.4.16;

contract SimpleBallot {
    
    struct Voter {
        bool hasVoted;
        int votedProposalIndex;
        bool rightToVote;
    }

    struct Proposal {
        bytes32 name;
        uint voteCount;
    }

    address public creator;
    Proposal[] public proposals;
    mapping(address => Voter) public voters;

    function SimpleBallot(bytes32[] proposalNames) public {
        creator = msg.sender;

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(
                Proposal({
                    name: proposalNames[i],
                    voteCount: 0
                })
            );
        }
    }

    function giveRightToVote(address person) public {
        // In this case, `storage` acts as a pointer
        Voter storage voter = voters[person];
        require(msg.sender == creator && !voter.hasVoted && !voter.rightToVote);
        voter.hasVoted = false;
        voter.rightToVote = true;
    }
}