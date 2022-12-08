import Script from "next/script";

type Config = {
  kitId: string,
  scriptTimeout: number,
  async: boolean
};

export const AdobeFont: React.FC<Config> = (config) => (
  <Script id="adobe-font">
    {`(function(l){var e={kitId:"hfd7jpz",scriptTimeout:3000,async:true},j=l.documentElement,g=setTimeout(function(){j.className=j.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"},e.scriptTimeout),c=l.createElement("script"),k=false,i=l.getElementsByTagName("script")[0],b;j.className+=" wf-loading";c.src="https://use.typekit.net/"+e.kitId+".js";c.async=true;c.onload=c.onreadystatechange=function(){b=this.readyState;if(k||b&&b!="complete"&&b!="loaded"){return}k=true;clearTimeout(g);try{Typekit.load(e)}catch(a){}};i.parentNode.insertBefore(c,i)})(document);`}
  </Script>
)