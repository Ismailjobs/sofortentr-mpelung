/** Inline hash helper — keep in sync with layout Script id="hash-scroll".
 * Scrollt zu Ankern, entfernt den Hash danach aus der URL (kein „hängendes“ #…).
 */
export const HASH_SCROLL_SCRIPT = `(function(){
  function norm(h){
    if(!h)return"";
    var id=h.replace(/^#/,"").split("#").filter(Boolean)[0]||"";
    if(id==="start")return"";
    return id?"#"+id:"";
  }
  function clearHash(){
    if(!location.hash)return;
    history.replaceState(null,"",location.pathname+location.search);
  }
  function scrollTo(h,tries){
    if(!h)return;
    var el=document.getElementById(h.slice(1));
    if(el){
      requestAnimationFrame(function(){
        el.scrollIntoView({behavior:"smooth",block:"start"});
        setTimeout(clearHash,400);
      });
      return;
    }
    if((tries||0)<50)setTimeout(function(){scrollTo(h,(tries||0)+1);},50);
  }
  var initial=norm(location.hash);
  if(initial){
    scrollTo(initial);
  }
  window.addEventListener("hashchange",function(){
    var h=norm(location.hash);
    if(h)scrollTo(h);
  },{passive:true});
  document.addEventListener("click",function(e){
    var a=e.target&&e.target.closest?e.target.closest('a[href*="#"]'):null;
    if(!a)return;
    if(a.getAttribute("data-hash-scroll")==="off")return;
    var href=a.getAttribute("href")||"";
    var i=href.indexOf("#");
    if(i<0)return;
    var hash=norm(href.slice(i));
    if(!hash)return;
    var path=href.slice(0,i);
    var here=location.pathname.replace(/\\/$/,"")||"/";
    if(path){
      var p=path.replace(/\\/$/,"")||"/";
      if(p!==here&&!(p==="/"&&here==="/"))return;
    }
    e.preventDefault();
    clearHash();
    scrollTo(hash);
  },true);
})();`;
