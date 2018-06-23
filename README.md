# Refugee Populations

Refugee Populations collects data from the World Bank and visualizes what countries refugees are coming from (Country of Origin) and what countries they are going to (Country of Asylum) between the years of 1990 and 2016.

## D3

Refugee Populations uses D3.js to create circles with radii relative to the square root of their respective data point. The fill of each circle is the flag of the country that pertains to that circle. Dropdown menus update the data to the current year and "type" (countries of asylum or countries of origin). Hovering over a circle will reveal more data about the exact numbers of that particular circle.

```js
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
  .attr("class", "circley")
  .attr("cx", d => {
    if (d[targetYear] !== 0) {
      return scale(d[targetYear]);
    }
  })
  .attr("cy", d => {
    if (d[targetYear] !== 0) {
      return scale(d[targetYear]);
    }
  })
  .attr("r", d => {
    if (d[targetYear] !== 0) {
      return scale(d[targetYear]);
    }
  })
  .attr("fill", d => {
    return "url(#" + d.code + ")";
  })
  .attr("stroke", "white")
  .attr("fill-opacity", 0.7)
  .on("mouseover", function(d) {
    console.log(d);
    let actionType;
    if (type === "asylum") {
      actionType = "came to";
    } else {
      actionType = "left";
    }
    d3.select(this).attr("fill-opacity", 1);
    d3.select(".infobox .ccc").text(d.code);
    d3.select(".infobox .yyy").text(
      "In " +
        String(targetYear) +
        ", " +
        String(d[targetYear].toLocaleString()) +
        " refugees " +
        actionType +
        " " +
        String(d.country)
    );
    d3.select(".infobox").style("visibility", "visible");
  })
  .on("mouseout", function(d) {
    d3.select(".infobox").style("visibility", "hidden");
    d3.select(this).attr("fill-opacity", 0.5);
  });
```

![img1](https://thumbs.gfycat.com/SlowDeafeningArabianoryx-size_restricted.gif)
![img2](https://thumbs.gfycat.com/ScrawnyHappyBluebottlejellyfish-size_restricted.gif)

## D3 Force

D3 Force allows the user to separate all countries into their respective continents. Buttons on the side allow the viewer to toggle between separate and combined views.

![gif1](https://thumbs.gfycat.com/CanineSnarlingBlackrussianterrier-size_restricted.gif)
![gif2](https://thumbs.gfycat.com/SilentUnkemptLeopardseal-size_restricted.gif)
![img3](https://thumbs.gfycat.com/UnnaturalGaseousIberianemeraldlizard-size_restricted.gif)

## Future Changes

1.  This application looks best on larger screens. In the future, I would like to implement scalability to the window to resize the container with respect to each viewer's browser.

2.  Currently, hovering over a circle will display some information about that current country, year, and whether it was an asylum or origin. In the future, I would like to add a click event handler to display a bar chart of that country's data over the years for both origin and asylum.
3.  When countries are divided into their respective continents, I would like for continent labels to display as well.
