export const  decodeBase64Image = async (base64String) => {
    const blob = new Blob([base64String], { type: 'image/jpeg' });
    const reader = new FileReader();
    reader.onload = function (event) {
        const binaryString = event.target.result;
        const imageBlob = new Blob([binaryString], { type: 'image/*' });
        const imageUrl = URL.createObjectURL(imageBlob);
        console.log('Dekodad bild-URL:', imageUrl);
        // Använd imageUrl för att visa bilden i din komponent
    };
    reader.readAsDataURL(blob);
};