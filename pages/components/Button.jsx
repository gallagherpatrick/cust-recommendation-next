function Button(props){
  const items = props.basket;
  const buttons = items.map((item) => <button key={item.itemID}
  className="py-2 px-4 my-2 rounded-full bg-[#222] text-[#fff] font-bold active:bg-[#6b6b6b]"
   onClick={()=>{
      let oAppEnablementPosInstance = new comGkSoftwareGkrAppEnablementApi.Pos();
      console.log("click")
      const sendRegisterItem = function(sItemID){
        console.log(sItemID);
        let registerLineItemRequest = JSON.stringify({
            "itemID": sItemID
        });
        oAppEnablementPosInstance.registerLineItem(registerDataOk, registerDataFailed, registerLineItemRequest);
        }
        function registerDataOk() {
          console.log("Succesfully registered", "success");
        }
        function registerDataFailed() {
          console.error("Data registration failed");
        }
        sendRegisterItem(item.itemID);
    }}>
      {item.receiptText}
    </button>)
  console.log(props.basket);
    return buttons
}

export default Button;