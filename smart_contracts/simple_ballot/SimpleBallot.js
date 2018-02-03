var simpleBallotFactory = eth.contract([{"constant":false,"inputs":[{"name":"proposalNumber","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"number","type":"uint256"},{"name":"voteCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"winningProposal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"}],"name":"giveRightToVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voters","outputs":[{"name":"hasVoted","type":"bool"},{"name":"hasRightToVote","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"proposalNumbers","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var simpleBallotCompiled = "0x" + "6060604052341561000f57600080fd5b6040516107e03803806107e0833981016040528080518201919050506000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600090505b81518110156100f5576001805480600101828161008f91906100fc565b91600052602060002090600202016000604080519081016040528086868151811015156100b857fe5b9060200190602002015181526020016000815250909190915060008201518160000155602082015181600101555050508080600101915050610072565b505061015d565b81548183558181151161012957600202816002028360005260206000209182019101610128919061012e565b5b505050565b61015a91905b8082111561015657600080820160009055600182016000905550600201610134565b5090565b90565b6106748061016c6000396000f300606060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630121b93f1461007d578063013cf08b146100a057806302d05d3f146100de578063609ff1bd146101335780639e7b8d611461015c578063a3ec138d14610195575b600080fd5b341561008857600080fd5b61009e60048080359060200190919050506101f1565b005b34156100ab57600080fd5b6100c16004808035906020019091905050610364565b604051808381526020018281526020019250505060405180910390f35b34156100e957600080fd5b6100f1610397565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561013e57600080fd5b6101466103bc565b6040518082815260200191505060405180910390f35b341561016757600080fd5b610193600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104de565b005b34156101a057600080fd5b6101cc600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105f0565b6040518083151515158152602001821515151581526020019250505060405180910390f35b6000806000339250600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002091506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156102a657508160000160009054906101000a900460ff16155b80156102c057508160000160019054906101000a900460ff165b15156102cb57600080fd5b600090505b60018054905081101561034157836001828154811015156102ed57fe5b9060005260206000209060020201600001541415610334576001808281548110151561031557fe5b9060005260206000209060020201600101600082825401925050819055505b80806001019150506102d0565b60018260000160006101000a81548160ff02191690831515021790555050505050565b60018181548110151561037357fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806103c761062e565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561042457600080fd5b60009250600090505b6001805490508110156104d1578260018281548110151561044a57fe5b90600052602060002090600202016001015411156104c45760018181548110151561047157fe5b906000526020600020906002020160010154925060018181548110151561049457fe5b90600052602060002090600202016040805190810160405290816000820154815260200160018201548152505091505b808060010191505061042d565b8160000151935050505090565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614801561058c57508060000160009054906101000a900460ff16155b80156105a757508060000160019054906101000a900460ff16155b15156105b257600080fd5b60008160000160006101000a81548160ff02191690831515021790555060018160000160016101000a81548160ff0219169083151502179055505050565b60026020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900460ff16905082565b6040805190810160405280600081526020016000815250905600a165627a7a7230582008cca65a2ea31548788df52eb7eb4c515bae48c391cd4d0f5c74edbae5b4dcf00029";