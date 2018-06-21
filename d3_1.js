var targetYear = 1990;

function refugees(type, targetYear) {
  const width = 1900,
    height = 875;

  const svg = d3
    .select("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "svg-container")
    .append("g")
    // .attr("transform", "translate(0,0)");
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  //      ==> this will set the initial setup at the center

  var defs = svg.append("defs");

  d3.json("./refugee_data.json", function(data) {
    /////////////////////////////////////////////////////////////////////////////
    ////////////////               CREATE SCALE                //////////////////
    /////////////////////////////////////////////////////////////////////////////

    var scale = d3
      .scaleSqrt()
      // .linear()
      .domain([0, 5000000])
      .range([0, 100]);

    /////////////////////////////////////////////////////////////////////////////
    ////////////////              CREATE FLAG IMG              //////////////////
    /////////////////////////////////////////////////////////////////////////////
    defs
      .selectAll(".flag-pattern")
      .data(data)
      .enter()
      .append("pattern")
      .attr("class", "flag-pattern")
      .attr("id", d => {
        return d.code;
      })
      .attr("height", "100%")
      .attr("width", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("height", "1")
      .attr("width", "1")
      .attr("preserveAspectRatio", "none")
      .attr("xlink:href", d => {
        return d.imagePath;
      });

    /////////////////////////////////////////////////////////////////////////////
    ////////////////              CREATE CIRCLES               //////////////////
    /////////////////////////////////////////////////////////////////////////////
    var circle = svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => {
        if (d[type][targetYear] !== 0) {
          return scale(d[type][targetYear]);
        }
      })
      .attr("cy", d => {
        if (d[type][targetYear] !== 0) {
          return scale(d[type][targetYear]);
        }
      })
      .attr("r", d => {
        if (d[type][targetYear] !== 0) {
          return scale(d[type][targetYear]);
        }
      })
      .attr("fill", d => {
        return "url(#" + d.code + ")";
      })
      .attr("stroke", "white")
      .attr("fill-opacity", 0.7)
      .on("mouseover", function(d) {
        d3.select(this)
          .attr("fill-opacity", 1)
          // .append("text")
          // .attr("class", "code")
          // .text(d.code);
          .attr("font-color", "blue");
      })
      .on("mouseout", function(d) {
        d3.select(this).attr("fill-opacity", 0.5);
        // d3.selectAll("text.country-code").remove();
      });

    /////////////////////////////////////////////////////////////////////////////
    ////////////////           CHANGE YEAR OR ASY-ORI          //////////////////
    /////////////////////////////////////////////////////////////////////////////
    AO = type;

    d3.select("#year").on("change", function() {
      var yr = eval(d3.select(this).property("value"));
      svg.selectAll("circle").remove();
      refugees(AO, yr);
    });

    // d3.select("#y1990").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1990);
    // });
    // d3.select("#y1991").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1991);
    // });
    // d3.select("#y1992").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1992);
    // });
    // d3.select("#y1993").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1993);
    // });
    // d3.select("#y1994").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1994);
    // });
    // d3.select("#y1995").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1995);
    // });
    // d3.select("#y1996").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1996);
    // });
    // d3.select("#y1997").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1997);
    // });
    // d3.select("#y1999").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1999);
    // });
    // d3.select("#y1998").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1998);
    // });
    // d3.select("#y1999").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 1999);
    // });
    // d3.select("#y2000").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2000);
    // });
    // d3.select("#y2001").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2001);
    // });
    // d3.select("#y2002").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2002);
    // });
    // d3.select("#y2003").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2003);
    // });
    // d3.select("#y2004").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2004);
    // });
    // d3.select("#y2005").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2005);
    // });
    // d3.select("#y2006").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2006);
    // });
    // d3.select("#y2007").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2007);
    // });
    // d3.select("#y2008").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2008);
    // });
    // d3.select("#y2009").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2009);
    // });
    // d3.select("#y2010").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2010);
    // });
    // d3.select("#y2011").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2011);
    // });
    // d3.select("#y2012").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2012);
    // });
    // d3.select("#y2013").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2013);
    // });
    // d3.select("#y2014").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2014);
    // });
    // d3.select("#y2015").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2015);
    // });
    // d3.select("#y2016").on("click", () => {
    //   svg.selectAll("circle").remove();
    //   refugees(AO, 2016);
    // });

    yr = targetYear;
    d3.select("#origin").on("click", () => {
      svg.selectAll("circle").remove();
      refugees("origin", yr);
    });
    d3.select("#asylum").on("click", () => {
      svg.selectAll("circle").remove();
      refugees("asylum", yr);
    });

    /////////////////////////////////////////////////////////////////////////////
    ////////////////          SEPARATE BY CONTINENT            //////////////////
    /////////////////////////////////////////////////////////////////////////////
    d3.select("#continent").on("click", () => {
      simulation
        .force("x", forceXSplit)
        .alphaTarget(0.5)
        .restart();
    });
    d3.select("#combine").on("click", () => {
      simulation
        .force("x", forceXCombine)
        .alphaTarget(0.5)
        .restart();
    });

    var forceXCombine = d3.forceX().strength(0.05);

    var forceY = d3.forceY().strength(0.05);

    var forceCollide = d3.forceCollide(d => {
      return scale(d[type][targetYear]);
    });

    var simulation = d3
      .forceSimulation()
      .force("x", forceXCombine)
      // .force("x", d3.forceX(width/2).strength(0.05)) ==> width/2 if translate is (0,0)
      .force("y", forceY)
      .force("collide", forceCollide);

    simulation.nodes(data).on("tick", ticked);

    function ticked() {
      circle
        .attr("cx", d => {
          return d.x;
        })
        .attr("cy", d => {
          return d.y;
        });
    }

    var forceXSplit = d3
      .forceX(d => {
        if (d.continent === "NA") {
          return -(width * 3) / 7;
        } else if (d.continent === "SA") {
          return (width * -2) / 7;
        } else if (d.continent === "EU") {
          return (width * -1) / 7;
        } else if (d.continent === "AF") {
          return 0;
        } else if (d.continent === "AU") {
          return (width * 1) / 7;
        } else if (d.continent === "AS") {
          return (width * 2) / 7;
        } else if (d.continent === "AN") {
          return (width * 3) / 7;
        }
      })
      .strength(0.05);
  });
}

refugees("asylum", 1990);
