function getSize(width, height, depth) {
    const area = 2*(depth * width + depth * height + width * height);
    const volume = depth * width * height;
    
    return [area, volume];
  }