const backgroundColors = [
      "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#800000", "#808000",
      "#008000", "#800080", "#008080", "#000080", "#FF4500", "#FFA500", "#FFD700", "#DAA520", "#B8860B", "#8B4513",
      "#A0522D", "#CD853F", "#F4A460", "#8B0000", "#A52A2A", "#DC143C", "#FF6347", "#FF7F50", "#FF8C00", "#FFA07A",
      "#FA8072", "#E9967A", "#FF69B4", "#FF1493", "#C71585", "#DB7093", "#FFC0CB", "#FFB6C1", "#DDA0DD", "#EE82EE",
      "#DA70D6", "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", "#800080", "#4B0082", "#6A5ACD"
  ];
  
  const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Georgia"];
  
  const textColors = [
      "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#800000", "#808000",
      "#008000", "#800080", "#008080", "#000080", "#FF4500", "#FFA500", "#FFD700", "#DAA520", "#B8860B", "#8B4513",
      "#A0522D", "#CD853F", "#F4A460", "#8B0000", "#A52A2A", "#DC143C", "#FF6347", "#FF7F50", "#FF8C00", "#FFA07A",
      "#FA8072", "#E9967A", "#FF69B4", "#FF1493", "#C71585", "#DB7093", "#FFC0CB", "#FFB6C1", "#DDA0DD", "#EE82EE",
      "#DA70D6", "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", "#800080", "#4B0082", "#6A5ACD"
  ];
  
  let currentBackgroundIndex = 0;
  let currentFontIndex = 0;
  let currentTextColorIndex = 0;
  
  document.getElementById('changeBackground').addEventListener('click', () => {
      document.body.style.backgroundColor = backgroundColors[currentBackgroundIndex];
      currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundColors.length;
  });
  
  document.getElementById('changeFont').addEventListener('click', () => {
      document.getElementById('text').style.fontFamily = fonts[currentFontIndex];
      currentFontIndex = (currentFontIndex + 1) % fonts.length;
  });
  
  document.getElementById('addEmoji').addEventListener('click', () => {
      const emojiPicker = document.getElementById('emojiPicker');
      emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
  });
  
  document.getElementById('changeTextColor').addEventListener('click', () => {
      document.getElementById('text').style.color = textColors[currentTextColorIndex];
      currentTextColorIndex = (currentTextColorIndex + 1) % textColors.length;
  });
  
  document.getElementById('text').addEventListener('input', () => {
      if (document.getElementById('text').innerText.trim() === '') {
          document.getElementById('text').innerText = 'type a status';
      }
  });
  
  const emojis = ["😁", "😆", "😌"];
  
  const emojiPicker = document.getElementById('emojiPicker');
  emojis.forEach(emoji => {
      const span = document.createElement('span');
      span.innerText = emoji;
      span.addEventListener('click', () => {
          document.getElementById('text').innerText += emoji;
      });
      emojiPicker.appendChild(span);
  });