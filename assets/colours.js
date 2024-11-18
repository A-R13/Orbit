export default colours = {
  purple: "#5928ED",
  lightPurple: "#A489F5",
  white: "#FFFFFF",
  grey: "#F5F5F5",
  darkGrey: "#858585",
  black: "#000000",
  closed: "#8C2222",
  busy: "#8C5722",
  moderate: "#8C8C22",
  quiet: "#578C22",
  open: "#228B22",
  statusToColour: function (status) {
    if (status <= 1) {
      return this.open;
    } else if (status <= 2) {
      return this.quiet;
    } else if (status <= 3) {
      return this.moderate;
    } else if (status <= 4) {
      return this.busy;
    } else {
      return this.closed;
    }
  },
};
