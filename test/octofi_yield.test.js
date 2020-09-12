var OctoFi = artifacts.require("./OctoFi.sol");
var YieldContract = artifacts.require('./YieldContract.sol');
var ether = require('./ether');
// const ethers = require('ethers');

require('chai')
    .use(require('chai-as-promised'))
    .should()


contract('OctoFi',([deployer, investor1, user1, user2,user3,investor2, investor3]) => {
  beforeEach(async function(){
  
     this.name     = "OctoFi";
     this.symbol  = 'OCTO';
     this.decimals  = 18;
     this.totalSupply = 800000 * (10 **  this.decimals);

     var d = new Date();
     var n = d.getTime();
     this.endDepositTime = n+n;

     maxT = 40000;
    //  maxT = maxT.toString();
    var toWe =await  web3.utils.toWei('40000', 'ether');
console.log("Max Token ",toWe)
      this.token = await OctoFi.new();

      this.yield = await YieldContract.new(this.token.address,this.endDepositTime,user1, toWe );
  })

  describe('initializes the contract with the correct values', function() {
    it('has the correct name', async function () {
        const name = await this.token.name();
        name.should.equal(this.name);
    });

    it('has the correct symbol', async function () {
        const symbol = await this.token.symbol();
        symbol.should.equal(this.symbol);
    });

    it('has the correct decimals', async function () {
        const decimals = await this.token.decimals();
        assert.equal(decimals.toString(), this.decimals.toString());
    });
    it('it has total supply', async function(){
        const totalSupply = await this.token.totalSupply();
        // assert.equal(totalSupply.toString(), this.totalSupply.toString());

    })
  })


  describe('Yield Contract', function(){

it('it deposit testing', async function(){
  // inputToken = ether.ether(500);
  inputToken = 500;
  inputToken =await  web3.utils.toWei('500', 'ether');
// inputToken = inputToken.toString();
 var bal = await this.token.balanceOf(this.yield.address);
 console.log("Balance Before ", bal.toString());
  await this.token.transfer(user2, inputToken);
  await this.token.approve(this.yield.address,  inputToken,{from:user2});

var {logs} = await this.yield.deposit6m(investor2,inputToken,{from:user2});
console.log("logs length ", logs.length)

var bal1 = await this.token.balanceOf(this.yield.address);
 console.log("Balance After ", bal1.toString());
// _allowances[sender][_msgSender()]

})
it("Ethers ", async function(){

  var BN = web3.utils.BN;
  var _maxTokens =  500 *10e18; //ether.ether(5000000);
 
  var toWe =await  web3.utils.toWei('100', 'ether');
  console.log("TO Wei ", toWe);


  // _maxTokens = ethers.utils.bigNumberify(_maxTokens);
  // console.log("MAx Token ",_maxTokens.toString())
})
  })
//   })
// })
});