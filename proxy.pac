function FindProxyForURL(url, host) {
   if (shExpMatch(url,"*service-now*")
     || shExpMatch(url,"*powerbi*")
     || shExpMatch(url,"*ariba*")
   ) {
     return "PROXY 172.16.17.52:1010";
   }
   return "DIRECT"; 
}
