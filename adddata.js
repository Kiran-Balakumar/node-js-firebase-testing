
module.exports = {
    add: function(req,res,ref) {
        ref.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
})
        res.end("done");
    },
    multiply: function(a,b) {
        return a*b
    }
};
