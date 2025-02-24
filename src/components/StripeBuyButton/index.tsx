import { useEffect } from "react";

const StripeBuyButton = () => {
  useEffect(() => {
    // The script should be loaded, and the element should render
  }, []);

  return (
    <stripe-buy-button
      buy-button-id="buy_btn_1QvmDQDmV4iVmxQ2zMXbmBgH"
      publishable-key="pk_live_51QlFEVDmV4iVmxQ2zkE2rxr374D06HTmNNg6IWBurdq1lO7t2sGFzPRAhuBICPg5FRPKFNPI8faMSjsWuIfsDaTJ008NEcuZXg"
    >
    </stripe-buy-button>
  )
};

export default StripeBuyButton;
