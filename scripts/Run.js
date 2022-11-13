const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    const domainContract = await domainContractFactory.deploy("xo");
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address);
    console.log("Contract deployed by:", owner.address);

      // We're passing in a second variable - value. This is the moneyyyyyyyyyy
    let txn = await domainContract.register("sensei",  {value: hre.ethers.utils.parseEther('0.1')});
    await txn.wait();
  
    const domainOwner = await domainContract.getAddress("sensei");
    console.log("Owner of domain 'sensei':", domainOwner);

    const twitter = await domainContract.getTwitter;
    console.log("Twitter :", twitter);

    const instagram = await domainContract.getInstagram;
    console.log("Instagram :", instagram);

    const youtube = await domainContract.getYouTube;
    console.log("YouTube :", youtube);

    const reddit = await domainContract.getReddit;
    console.log("Reddit :", reddit);

    const opensea = await domainContract.getOpenSea;
    console.log("OpenSea :", opensea);

    const web2Url = await domainContract.getWeb2Url;
    console.log("Web2Url :", web2Url);

    const btc = await domainContract.getBTC;
    console.log("BTC :", btc);

    const eth = await domainContract.getETH;
    console.log("ETH :", eth);

    const bnb = await domainContract.getBNB;
    console.log("BNB :", bnb);

    const trx = await domainContract.getTRX;
    console.log("TRX :", trx);

    const avax = await domainContract.getAVAX;
    console.log("AVAX :", avax);

    const sol = await domainContract.getSOL;
    console.log("SOL :", sol);

    const other1 = await domainContract.getOther1;
    console.log("Other1 :", other1);

    const other2 = await domainContract.getOther2;
    console.log("Other2 :", other2);

    const other3 = await domainContract.getOther3;
    console.log("Other3 :", other3);

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();