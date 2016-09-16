<!-- Beginning of JavaScript Style Sheet Generator

function generate() {
// Declare CSS Variables:
// Body Attributes
fontfamily=document.data.ffamily.value
fontsize=document.data.fsize.value
fontcolor=document.data.fcolor.value
backcolor=document.data.bcolor.value
// A:Link
linkcolor=document.data.lcolor.value
linkweight=document.data.lweight.value
linkdecorate=document.data.ldecorate.value
linkbackground=document.data.lback.value
// A:Active
activecolor=document.data.acolor.value
activeweight=document.data.aweight.value
activedecorate=document.data.adecorate.value
activebackground=document.data.aback.value
// A:Visited
visitedcolor=document.data.vcolor.value
visitedweight=document.data.vweight.value
visiteddecorate=document.data.vdecorate.value
visitedbackground=document.data.vback.value
// A:Hover
hovercolor=document.data.hcolor.value
hoverweight=document.data.hweight.value
hoverdecorate=document.data.hdecorate.value
hoverbackground=document.data.hback.value
// Define Special Characters:
lt="<"
gt=">"
quot="\""
lb="{"
rb="}"
// Output this Code...
// Copy & Paste Section:
output=lt+"\!"+"--  Start your Copy-and-Paste Selection Here...  //--"+gt+"\n\n"
// Body Color, Font-Family and Font-Size...
+lt+"style type="+quot+"text/css"+quot+gt+
"\n\nBody "+lb+"font-family : "+fontfamily+"; "+"background-color : "+backcolor+"; "+"color : "+fontcolor+"; "+"font-size : "+fontsize+";"+rb
// Link Options...
+"\n\nA:link "+lb+"color : "+linkcolor+"; "+"font-weight : "+linkweight+"; "+"text-decoration : "+linkdecorate+"; "+"background : "+linkbackground+";"+rb
// Visited Link Options...
+"\n\nA:visited "+lb+"color : "+visitedcolor+"; "+"font-weight : "+visitedweight+"; "+"text-decoration : "+visiteddecorate+"; "+"background : "+visitedbackground+";"+rb
// Hover Link Options...
+"\n\nA:hover "+lb+"color : "+hovercolor+"; "+"font-weight : "+hoverweight+"; "+"text-decoration : "+hoverdecorate+"; "+"background : "+hoverbackground+";"+rb
// Active Link Options...
+"\n\nA:active "+lb+"color : "+activecolor+"; "+"font-weight : "+activeweight+"; "+"text-decoration : "+activedecorate+"; "+"background : "+activebackground+";"+rb+"\n\n"
+lt+"/style"+gt+"\n\n"
// End Code
+lt+"\!"+"--  Stop Copy-and-Paste Here...  //--"+gt+"\n\n"
// Have a good day
+lt+"\!"+"--  };-) http://urbotz.blogspot.com/  //--"+gt+"\n\n"
// Output Code
document.data.output.value = output
}

// End of JavaScript -->
