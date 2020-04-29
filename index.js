//mapping data in general 
var data = [
    ["Italy", ["Partial Solutions", "Protecting Necessary Workers", "Government Participation/Trust", "Culture", "Data/Surveillance", "Testing", "Healthcare System", "Population Demographics"]],
    ["Spain", ["Healthcare System", "Protecting Necessary Workers", "Culture", "Testing", "Government Participation/Trust", "Population Demographics"]],
    ["Indonesia", ["Healthcare System", "Testing", "Government Participation/Trust", "Data/Surveillance", "Protecting Necessary Workers", "Country Socioeconomic Status","Previous Experience with Outbreak", "Population Demographics"]],
    ["South Korea", ["Healthcare System", "Previous Experience with Outbreak", "Protecting Necessary Workers", "Data/Surveillance", "Testing", "Government Participation/Trust"]],
    ["Germany", ["Healthcare System", "Protecting Necessary Workers", "Testing", "Data/Surveillance", "Government Participation/Trust", "Population Demographics"]],
    ["Taiwan", ["Healthcare System","Testing", "Data/Surveillance", "Government Participation/Trust", "Global Visibility", "Previous Experience with Outbreak"]]
    // ["Iceland", ["Healthcare System", "Protecting Necessary Workers", "Testing", "Data/Surveillance", "Government Participation/Trust"]],
];
//console.log(data);
//mapping color data 
var colordata = {
    "Italy": "#DC143C",
    "Germany": "#4DB35E",
    "South Korea": "#4DB35E",
    "Spain": "#DC143C",
    "Taiwan": "#4DB35E",
    "Indonesia": "#DC143C",
};

//OG - red : #DC143C, 2E8B57 green : #00FF7F, #87E8CF, maybe #3CB371, #30FFC8, 

var southKorea = {
    titles: ["Healthcare System", "Testing", "Government Participation/Trust", "Surveillance/Data","Protecting Necessary Workers", "Previous Experience with Outbreak"],
    stats_titles: ["Total Number of Cases", "Total Number of Deaths", "Fatality Rate(%)"],
    stats: ["10331", "192", "1.9"],
    info: ["South has a nationalized health care system, guaranteeing most care with special rules for coronavirus-related costs. This gives even people with no symptoms greater incentive to get tested.", "South Korea has tested more people than any other country, enabling it to isolate and treat many people. Examples of testing included drive-through stations and walk-in centers.", "One week after the first COV-19 diagnosis, government officials urged medical companies develop coronavirus test kits. Social trust is higher in SK than other countries and citizens have broadly accepted the loss of privacy as a trade-off.", "Websites and smartphone apps detail infected people’s travel - their bus path, whether they were wearing masks. There's also an app alerting officials if an infected patient leaves isolation.","To spare hospitals/clinics from being overwhelmed and to minimize contact with health workers, officials opened 600 testing centers to screen as many people as quickly as possible.", "South Korea were primed to treat the coronavirus as a national emergency, due to the MERS outbreak in 2015. They developed many contact tracing tools during that time."]
};
// console.log(southKorea.stats);

var Italy = {
    titles: ["Healthcare System", "Testing", "Government Participation/Trust","Surveillance/Data","Protecting Necessary Workers", "Partial Solutions", "Population Age", "Culture"],
    stats_titles: ["Total Number of Cases", "Total Number of Deaths", "Case Fatality Rate(%)"],
    stats: ["199,414", "26,997", "13.5"],
    info: ["The Italian healthcare system is highly decentralized, so regional policies led to imbalanced outcomes. Consider Lombardy and Veneto, two nearby regions with similar socioeconomic profiles. As of 3/26, Lombardy's fatality rate: 14.29%, Veneto's : 4.1%.", "Regions approached testing differently - Veneto conducted more tests than Lombardy and tested for mildly symptomatic cases.","Although scientists had been warning for weeks, initial state-of-emergency reports were met by skepticism by policy circles.","Early on in the pandemic, there was a lack of proactive tracing. This may have been due to lack of epidemiological capabilities and inability to record infection peaks in some hospitals.","In certain areas, there was a lack of efforts to monitor and protect healthcare and other essential workers.","The government gradually increased lockdown areas, which was inconsistent with the exponential spread of the virus. Also, when north Italy was on lockdown, there was an exodus to south Italy, spreading the virus to previously uninfected areas.","Italy has the second-oldest population on Earth. Many of Italy's deaths have those in their 80s, 90s, a population known to be more susceptible to complications from COVID-19. ","The young in Italy tend to mingle more with the elderly, like grandparents. Researchers argue that young Italians' travel between cities and homes may have aided the virus spread."]
};

var Spain = {
    titles: ["Healthcare System", "Testing", "Government Participation/Trust","Protecting Necessary Workers","Population Age", "Culture"],
    stats_titles: ["Total Number of Cases", "Total Number of Deaths", "Case Fatality Rate(%)"],
    stats: ["229,422", "23,521", "10.3"],
    info: ["Spain has a national health care system, while each of the 17 regions actually administer it separately. According to health labor leader Hernández Puente, this caused a lot of coordination issues, including leaving doctors ill-supplied to provide care.","Cinta Moro, a doctor in Seville, believes the lack of foresight and planning doomed Spain from the start, “With tests, we would’ve stopped a lot of the problems we have now.","Prime Minister Pedro Sánchez, weak after forming a minority government, likely didn’t want to risk power by banning large events, experts say. He allowed thousands to attend soccer games and permitted a 120,000-strong feminist rally in Madrid. The event has widely been blamed for spreading the virus.","Physicians lack masks, gloves, and other protective gear. There are also understaffed intensive care units where patients with the most severe symptoms are short of beds and respirators.","Spain has a large elderly population, a vulnerable population for the virus, and retirement homes don't have many medical resources.","Spanish doctors noted parts of the Spanish lifestyle that complicated the public's reaction to the spread: Spain has an embedded late-night culture and there's a paranoia stemming back to Spain’s dictatorship, creating friction between the public and law enforcement."]
}

var Germany = {
    titles: ["Healthcare System", "Testing", "Government Participation/Trust", "Surveillance/Data","Protecting Necessary Workers","Population Age"],
    stats_titles: ["Total Number of Cases", "Total Number of Deaths", "Case Fatality Rate(%)"],
    stats: ["158,758", "6,126", "3.9"],
    info: ["Unburdened by a central regulatory body, private companies moved quickly to mass produce tests and patients pay nothing to be tested. Germany also has a high number of intensive care beds, so hospitals have not been overwhelmed.","Germany's low fatality rate is because of the ability to test early and often, isolating cases and allowing timely treatment. Germany also has multinational diagnostics company Roche, with the capacity to carry out up to 500,000 tests/week, whereas the U.K. can currently manage just over 10,000/day.","Many appreciate Chancellor Angela Merkel's, a trained scientist, communication throughout the crisis. The distancing restrictions were met with little political opposition and are broadly followed.","There has not been any contact tracing apps yet, but Angela Merkel says she welcomes the development of a European  tracing app that protects user data. ","Medical staff are regularly tested. To streamline the procedure, hospitals have done block tests, using swabs of 10 employees and following up with individuals only if there is a positive result.","The average age of those infected is lower in Germany than in  other countries. Many early patients caught the virus in Austrian and Italian ski resorts and were relatively young and healthy. "]
}

var Taiwan = {
    titles: ["Healthcare System", "Testing", "Government Participation/Trust", "Surveillance/Data","Global Visibility","Previous Experience with Outbreak"],
    stats_titles: ["Total Number of Cases", "Total Number of Deaths", "Case Fatality Rate(%)"],
    stats: ["429", "6", "1.4"],
    info: ["Taiwan has publicly financed health insurance which covers 99% of the population. Kolas Yotaka, a Taiwanese government representative, says you can get tested for free and \"if you're forced to be isolated, during the 14 days, we pay for your food, lodging, and medical care.\"","When Chinese officials notified the WHO that China had several cases of pneumonia, Taiwanese officials began monitoring passengers from Wuhan. Suspected cases were screened for viruses, including SARS and MERS, and passengers displaying symptoms were quarantined and assessed for medical need. On 1/26, Taiwan became the first country to ban flights from Wuhan.","Taiwan's government has gone to great lengths to keep citizens informed, including daily press conferences and messaging about hand washing, face masks and dangers of hoarding. The government also banned the export of face masks and ensured they were affordable by capping prices at about $0.17 each.","Taiwan merged national health insurance data with customs and immigration databases to create real-time alerts to help identify vulnerable populations. There were mandatory online reporting and check-ins for 14 days after travel restrictions. It also employed \"digital fencing\", where alarms would sound if a quarantined person wandered too far from home.","Because of opposition from the People’s Republic of China, Taiwan is not a member of the United Nations or the World Health Organization. Patrick Tung, a Taiwan native says, \"being isolated from global organizations makes Taiwanese very aware of the publicity of its success in handling a crisis like this. The more coverage from foreign media, the more people feel confident in government policy and social mobilization.\"","Taiwan has dealt with outbreaks in the past : SARS in 2003 and swine flu in 2009. After SARS, Taiwan established a Central Epidemic Command Center and the center was activated a day before Taiwan confirmed its first COVID-19 infection. The center enacted more than 120 action items within three weeks, according the Journal of the American Medical Association."]
}

var Indonesia = {
    titles: ["Healthcare System", "Testing", "Government Participation/Trust", "Surveillance/Data","Protecting Necessary Workers","Previous Experience with Outbreak","Country Socioeconomic Status","Population Demographics"],
    stats_titles: ["Total Number of Cases", "Total Number of Deaths", "Case Fatality Rate(%)"],
    stats: ["9,096", "765", "8.4"],
    info:["Indonesia has just four doctors and 12 hospital beds per 10,000 people, and less than three intensive care beds per 100,000. These levels are way below WHO or Asia-Pacific standards. There's also an extreme shortage of ventilators for patients, and definitely not enough for a country whose five leading causes of death are all tobacco-related.","The pandemic tallying website Worldometer shows Indonesia has one of the lowest testing rates in the world. Only 184 in every million people in the country have been tested compared with 2,043 for every 1 million in Thailand and 20,629 for every 1 million in Germany.","Until early March, the government claimed it had no cases of infection. Health minister, Terawan Agus Putranto, proposed the public to eat more bean sprouts and broccoli, while President Joko Widodo (Jokowi) sang the praises of jamu, traditional herbal remedies. On 3/2, Indonesia finally acknowledged COVID-19 and Jokowi admitted his government had withheld information from the public “to avoid panic”.","Before March, Indonesia hadn't reported any confirmed cases of COVID-19. However, in a model study at Harvard's School of Public Health, epidemiologists concluded it was unlikely the world’s fourth most populous nation didn't have a single COVID-19 case. Terawan Agus Putranto called the study insulting and later said, “We owe it to God” for the lack of cases.","There is also a significant lack of protective equipment for health care workers. Workers have been told they to use raincoats as medical gowns. can turn up to work in raincoats. As of 4/7, at least 24 doctors had died, about 11% of all recorded deaths.","Previously, the country has been exposed to various epidemics such as Sars, Ebola and Bird Flu. During the outbreak of the H5N1 bird flu virus more than a decade ago, nearly 200 people died at an 84% death rate, prompting intervention by the WHO. So, health professionals were skeptical of Indonesian leaders' responses attributing the lack of COV-19 cases to prayer.","Many low- and middle-income countries, like Indonesia, have had the tough decision to enact lockdowns, deciding between  strict lockdowns that put people out of jobs and causing starvation or looser guidelines causing the spread of COV-19. ","There are a large number of migrant workers in Indonesia, and thousands of migrant workers left Jakarta and returned to their hometowns in March, when the disease began to surge in the city. This could have potentially spread the virus around the country. Indonesia also has the largest Muslim population in the world, and each year there is a mass migration home, “mudik” for Idul Fitri, the celebration at the end of Ramadan. Recently, President Jokowi decided to ban “mudik” to curb the spread of the virus. "]
}

var countries = {
    "South Korea": southKorea,
    "Italy": Italy,
    "Spain": Spain,
    "Germany": Germany,
    "Taiwan": Taiwan,
    "Indonesia": Indonesia
};

// transform the data into a useful representation
// 1 is inner, 2, is outer

// need: inner, outer, links
//
// inner: 
// links: { inner: outer: }

// const text = document.getElementById("country-text");
var outer = d3.map();
var inner = [];
var links = [];

var outerId = [0];

data.forEach(function (d) {

    if (d == null)
        return;

    i = {
        id: 'i' + inner.length,
        name: d[0],
        related_links: []
    };
    i.related_nodes = [i.id];
    inner.push(i);

    if (!Array.isArray(d[1]))
        d[1] = [d[1]];

    d[1].forEach(function (d1) {

        o = outer.get(d1);

        if (o == null) {
            o = {
                name: d1,
                id: 'o' + outerId[0],
                related_links: []
            };
            o.related_nodes = [o.id];
            outerId[0] = outerId[0] + 1;

            outer.set(d1, o);
        }

        // create the links
        l = {
            id: 'l-' + i.id + '-' + o.id,
            inner: i,
            outer: o
        }
        links.push(l);

        // and the relationships
        i.related_nodes.push(o.id);
        i.related_links.push(l.id);
        o.related_nodes.push(i.id);
        o.related_links.push(l.id);
    });
});

data = {
    inner: inner,
    outer: outer.values(),
    links: links
}

// sort the data -- TODO: have multiple sort options
outer = data.outer;
data.outer = Array(outer.length);


var i1 = 0;
var i2 = outer.length - 1;

for (var i = 0; i < data.outer.length; ++i) {
    if (i % 2 == 1)
        data.outer[i2--] = outer[i];
    else
        data.outer[i1++] = outer[i];
}

//originally, diameter was 960; 
var diameter = 900;
var rect_width = 250;
var rect_height = 50;
var bordercolor = 'black';
var border = 1; 
//transform this

var link_width = "1.5px";

var il = data.inner.length;
var ol = data.outer.length;

var inner_y = d3.scale.linear()
    .domain([0, il])
    .range([-(il * rect_height) / 2, (il * rect_height) / 2]);

mid = (data.outer.length / 2.0)
var outer_x = d3.scale.linear()
    .domain([0, mid, mid, data.outer.length])
    .range([15, 170, 190, 355]);

var outer_y = d3.scale.linear()
    .domain([0, data.outer.length])
    .range([0, diameter / 2 - 120]);


// setup positioning
data.outer = data.outer.map(function (d, i) {
    d.x = outer_x(i);
    d.y = diameter / 3;
    return d;
});

data.inner = data.inner.map(function (d, i) {
    d.x = -(rect_width / 2);
    d.y = inner_y(i);
    return d;
});


function get_color(name) {
    //Italy, Spain 
    if (colordata[name] != null) {
        return colordata[name];
        console.log(colordata[name]);
    }
    return '#ffff00';
    //if can't find value, return random color 
    //#FFD700, #FFFF99

}

// Can't just use d3.svg.diagonal because one edge is in normal space, the
// other edge is in radial space. Since we can't just ask d3 to do projection
// of a single point, do it ourselves the same way d3 would do it.  


function projectX(x) {
    return ((x - 90) / 180 * Math.PI) - (Math.PI / 2);
}

var diagonal = d3.svg.diagonal()
    .source(function (d) {
        return {
            "x": d.outer.y * Math.cos(projectX(d.outer.x)),
            "y": -d.outer.y * Math.sin(projectX(d.outer.x))
        };
    })
    .target(function (d) {
        return {
            "x": d.inner.y + rect_height / 5,
            "y": d.outer.x > 180 ? d.inner.x : d.inner.x + rect_width
        };
    })
    .projection(function (d) {
        return [d.y, d.x];
    });


var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");


// links or scribble lines 
var link = svg.append('g').attr('class', 'links').selectAll(".link")
    .data(data.links)
    .enter().append('path')
    .attr('class', 'link')
    .attr('id', function (d) {
        return d.id
    })
    .attr("d", diagonal)
    .attr('stroke', function (d) {
        return get_color(d.inner.name);
    }) //calling the get_color - changing the color
    .attr('stroke-width', link_width);

// outer nodes

var onode = svg.append('g').selectAll(".outer_node")
    .data(data.outer)
    .enter().append("g")
    .attr("class", "outer_node")
    .attr("transform", function (d) {
        return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
    })
    .on("mouseover", mouseover)
    .on("mouseout", mouseout);

onode.append("circle")
    .attr('id', function (d) {
        return d.id
    })
    .attr("r", 4.5);

onode.append("circle")
    .attr('r', 20)
    .attr('visibility', 'hidden');

onode.append("text")
    .attr('id', function (d) {
        return d.id + '-txt';
    })
    .attr("dy", ".31em")
    .attr("text-anchor", function (d) {
        return d.x < 180 ? "start" : "end";
    })
    .attr("transform", function (d) {
        return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)";
    })
    .text(function (d) {
        return d.name;
    });

// inner nodes

var inode = svg.append('g').selectAll(".inner_node")
    .data(data.inner)
    .enter().append("g")
    .attr("class", "inner_node")
    .attr("transform", function (d, i) {
        return "translate(" + d.x + "," + d.y + ")"
    })
    .on("mouseover", mouseover)
    .on("mouseout", mouseout);

inode.append('rect')
    .attr('width', rect_width)
    .attr('height', rect_height)
    .attr("stroke", bordercolor)
    .style("stroke-width", border)
    // .style("text-anchor", "middle")
    .attr('id', function (d) {
        return d.id;
    })
    .attr('fill', function (d) {
        return get_color(d.name);
    })
    .on("click", function (d) {
            // console.log("I'm clicked");
            // console.log(d.name);
            
            let statsbox = "<div class = 'statsbox-box'><div class = 'statsbox-title'></div><div class= 'statsbox-info'></div></div>";
            let innerboxes = "<div class = 'countryinfobox-box'><div class='countryinfotitle'></div><div class = 'countryinfotext'></div></div>";

            //Country Name
            const text = document.getElementById("countryname");
            text.innerHTML = d.name;
            const titlecolor = document.getElementById("titlebox");
            titlecolor.style.backgroundColor = colordata[d.name];

            //Stats Box 
            let statsinfo = document.getElementById("statsbox");
            statsinfo.innerHTML = statsbox.repeat(countries[d.name].stats_titles.length)
            console.log(countries[d.name].stats_titles.length)

            let statsTitles = document.getElementsByClassName("statsbox-title");
            let statsTexts = document.getElementsByClassName("statsbox-info");

            for (let i = 0; i < statsTitles.length; i++) {
                statsTitles[i].innerHTML = countries[d.name].stats_titles[i];
                statsTexts[i].innerHTML = countries[d.name].stats[i];
                // console.log(countries[d.name].stats[i]);
            }

            //infoboxes 
            let infobox = document.getElementById("countryinfobox");
            // console.log(countries);
            infobox.innerHTML = innerboxes.repeat(countries[d.name].titles.length);
            // console.log(countries[d.name].titles); //logs the southkorea.titles array 
            
            let boxtitles = document.getElementsByClassName("countryinfotitle");
            let boxtexts = document.getElementsByClassName("countryinfotext");

            for (let i = 0; i < boxtitles.length; i++) {
                boxtitles[i].innerHTML = countries[d.name].titles[i];
                boxtexts[i].innerHTML = countries[d.name].info[i];
            }


        });

        inode.append("text")
        .attr('id', function (d) {
            return d.id + '-txt';
        })
        .attr('text-anchor', 'middle')
        .attr("transform", "translate(" + rect_width / 2 + ", " + rect_height * .75 + ")")
        .text(function (d) {
            return d.name;
        });

        // need to specify x/y/etc

        d3.select(self.frameElement).style("height", diameter - 150 + "px");

        function mouseover(d) {
            d3.selectAll('.links .link').sort(function (a, b) {
                return d.related_links.indexOf(a.id);
            });

            for (var i = 0; i < d.related_nodes.length; i++) {
                d3.select('#' + d.related_nodes[i]).classed('highlight', true);
                d3.select('#' + d.related_nodes[i] + '-txt').attr("font-weight", 'bold').style("font-family", 'Verdana');
            }

            // CODE FOR MAKING THINGS INVISIBLE ON MOUSE OVER
            //d is JSON object representing country + related info
            //inner is an array of d's
            //think of example - var fruits = ["Banana", "Orange", "Apple", "Mango"]; var n = fruits.includes("Mango"); - you're looking for mango within fruits array, n is a boolean
            if(inner.includes(d)) { //true
                for (var i = 0; i < inner.length; i++) {
                    if(inner[i] !== d){
                        // console.log("this is running");
                        // console.log(inner[i].related_links.length);
                        for(var j = 0; j < inner[i].related_links.length; j++) {
                            // console.log(related_nodes[j])
                            d3.select('#' + inner[i].related_links[j]).style('display', 'none');
                        }
                    }
                }
            } else { //false
                for (var i = 0; i < outer.length; i++) {
                    if(outer[i] !== d){
                        console.log(d.name);
                        // console.log(outer[i].related_links.length);
                        for(var j = 0; j < outer[i].related_links.length; j++) {
                            // console.log(related_nodes[j])
                            d3.select('#' + outer[i].related_links[j]).style('display', 'none');
                        }
                    }
                }
            }
            console.log(outer);
            console.log("related node" + d.related_nodes);
        

            for (var i = 0; i < d.related_links.length; i++) {
                d3.select('#' + d.related_links[i]).attr('stroke-width', '5px');
            }
        }

        function mouseout(d) {
            for (var i = 0; i < d.related_nodes.length; i++) {
                d3.select('#' + d.related_nodes[i]).classed('highlight', false);
                d3.select('#' + d.related_nodes[i] + '-txt').attr("font-weight", 'normal').style("font-family", 'Verdana');
            }

            //CODE FOR MAKING THINGS INVISIBLE ON MOUSE OVER 
            for (var i = 0; i < inner.length; i++) {
                if(inner[i].name !== d.name){
                    for(var j = 0; j < inner[i].related_links.length; j++) {
                        d3.select('#' + inner[i].related_links[j]).style('display', 'block');
                    }
                }
            }

            for (var i = 0; i < d.related_links.length; i++)
                d3.select('#' + d.related_links[i]).attr('stroke-width', link_width);
        }




