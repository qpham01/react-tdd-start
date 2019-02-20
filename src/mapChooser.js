function mapChooser(location) {
  if (!location) {
    location = "default";
  }
  return location + ".jpg";
}

export default mapChooser;
