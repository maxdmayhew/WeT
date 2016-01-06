walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bInternet of Things\b/g, "Wifi Enabled Toaster");
	v = v.replace(/\bInternet of things\b/g, "Wifi Enabled toaster");
	v = v.replace(/\binternet of Things\b/g, "wifi enabled Toaster");
	v = v.replace(/\binternet of things\b/g, "wifi enabled toaster");
	
	// replace IoT to WeT 
	v = v.replace(/\bIoT\b/g, "WeT");


	textNode.nodeValue = v;
}


