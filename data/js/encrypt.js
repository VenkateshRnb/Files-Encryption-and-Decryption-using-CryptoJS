/* 
function encryptit()
{
				var encrypted = CryptoJS.RC4.encrypt("Message", "Secret Passphrase");

				var decrypted = CryptoJS.RC4.decrypt(encrypted, "Secret Passphrase");

                var dataUrl = 'data:data:application/octet-stream,' + encrypted;
                array1.push('href=data:data:application/octet-stream,' + encrypted);

                var link = document.createElement("a");
                link.download = file.name + '.encrypted';
                link.target = "_blank";

                // Construct the uri
                link.href = dataUrl;
                document.body.appendChild(link);
                link.click();

                // Cleanup the DOM
                document.body.removeChild(link);
                delete link;
                };
                $('#thelist').append('FILES: ' + file.name + '<br>')
                reader.readAsDataURL(file);
              })
			  
			  
			  */