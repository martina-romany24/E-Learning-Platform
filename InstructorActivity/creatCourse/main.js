

/* ######################## Creat element method ###############*/
function creatElement_(ele) {
    return document.createElement(ele);
}
/* ######################### creat textnode method ################ */
function createTextNode_(text) {
    return document.createTextNode(text);
}
/* ################## Set Elment Attribute method ##################### */
function setElementAttribute(ele, obj) {
    for (let key in obj) {
        ele.setAttribute(key, obj[key])
    }
}
//update style
function updateStyleAtrributes(elem ,attribute,styleOfAttribute)
{
    let currentStyle =  elem.getAttribute("style") || "";
    // Add or update one style (e.g., change attribute)
    let myVar = `${attribute}:[^;]*;`;
    let regex = new RegExp(myVar); // same as /test/
    currentStyle = currentStyle.replace(regex,''); // remove if exists
    currentStyle += `${attribute}:${styleOfAttribute};`;
    // Set the new style attribute
    elem.setAttribute("style", currentStyle);
}
/* ################  main design sections ################## */
var breakSpace = document.createElement("br");
var body = document.body;
var instructorPrfileHeader =creatElement_("nav");
body.appendChild(instructorPrfileHeader);
var instrcutorPageAsideBar =creatElement_("aside");
body.appendChild(instrcutorPageAsideBar);

/*##############################  ##################################
************************* nav section start ***********************
#####################################################################*/

//######################## drop down icon design #########
let dropDownListConainer =creatElement_("section")
let dropDownListConainerElm1 =creatElement_("div")
let dropDownListConainerElm2 =creatElement_("div")
let dropDownListConainerElm3 =creatElement_("div")
dropDownListConainer.appendChild(dropDownListConainerElm1)
dropDownListConainer.appendChild(dropDownListConainerElm2)
dropDownListConainer.appendChild(dropDownListConainerElm3)
let dropDownListConainerElmsStyle ={
    "style":
    `
        background-color:rgb(78, 74, 74) ;
        padding :3px ;
    `
}
setElementAttribute(dropDownListConainer ,
    {
        "style":
        `
        display : grid ;
        row-gap :2px;
        grid-template-columns:40px;
        grid-auto-flow :row ;
        grid-auto-row :3px;
        box-sizing : border-box ;
        `
    })
setElementAttribute(dropDownListConainerElm1,dropDownListConainerElmsStyle);
setElementAttribute(dropDownListConainerElm2,dropDownListConainerElmsStyle);
setElementAttribute(dropDownListConainerElm3,dropDownListConainerElmsStyle);

//########################## my profile and image icon design #############
let instructorHeaderContainer1 =creatElement_("section");
let instructorHeaderStudentContainer =creatElement_("div");
let instructorHeaderImgContainer=creatElement_("div");

let instructorHeaderStudentContainerAnckorLink =creatElement_("a");
let instructorHeaderImgContainerAnchorLink=creatElement_("a");

let instructorHeaderStudentContainerText =creatElement_("span");
let instructorHeaderImgContainerImg=creatElement_("img");

let instructorHeaderStudentContainerAnckorLinkText =createTextNode_("My profile");


//append section 
instructorPrfileHeader.appendChild(dropDownListConainer)
instructorPrfileHeader.appendChild(instructorHeaderContainer1);
instructorPrfileHeader.appendChild(instructorHeaderStudentContainer);
instructorPrfileHeader.appendChild(instructorHeaderImgContainer);

//append student and img elems
instructorHeaderStudentContainer.appendChild(instructorHeaderStudentContainerAnckorLink);
instructorHeaderImgContainer.appendChild(instructorHeaderImgContainerAnchorLink);

instructorHeaderStudentContainerText.appendChild(instructorHeaderStudentContainerAnckorLinkText);
instructorHeaderStudentContainerAnckorLink.appendChild(instructorHeaderStudentContainerText);
instructorHeaderImgContainerAnchorLink.appendChild(instructorHeaderImgContainerImg);

//style student link
setElementAttribute(instructorPrfileHeader ,
    {
        "style":
        `
        align-items :center;
        background-clip :border-box;
        background-image: linear-gradient(rgba(189, 114, 198, 0.98),rgba(129, 183, 203, 0));
        background-color :;
        border-radius : 5px;
        box-shadow :none;
        box-sizing :border-box;
        display :flex;
        height :72px;
        margin :0px ;
        padding :0px 24px;
        position: fixed;
        width:100vw;
        top :0px;
        left :0px;
        z-index: 1010;
        `
    }
)
setElementAttribute(instructorHeaderContainer1,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        flex-basis :100%;
        flex-grow :1;
        flex-shrink : 1;
        margin:0px;
        padding:0px;
        `
    }
)

setElementAttribute(instructorHeaderStudentContainer,
    {
        "style":
        `
        box-sizing :border-box;
        display :block;
        padding:0px;
        margin:0px;
        position :relative;
        `
    }
)

setElementAttribute(instructorHeaderStudentContainerAnckorLink,
    {
        "style":
        `
        align-items :center;
        background-color :rgba(0, 0, 0, 0);
        border :0px none white ;
        box-sizing :border-box;
        color  :rgb(48, 49, 65);
        cursor :pointer;
        display :inline-flex;
        font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size :14px;
        font-weight :700;
        height :40px;
        justify-content :center;
        letter-spacing :normal;
        line-height :16.8px;
        margin :12px 0px ;
        max-width :100%;
        min-width :0px;
        padding :0px 12px;
        position :relative;
        text-decoration-line :none;
        text-decoration-style :solid;
        text-decoration-thickness :auto;
        text-size-adjust :100%;
        text-wrap-mode: nowrap;
        user-select :none;
        vertical-align :bottom;
        white-space-collapse :collapse;
        width :auto;
        `,
        "href":"../../instructor/HTML/profilePicrure.html",
        "target":"_self"
    })
setElementAttribute(instructorHeaderStudentContainerText,
    {
        "style":
        `
        box-sizing :border-box;
        cursor :pointer;
        display :block;
        white-space-collapse : collapse;
        `
    }
)

//style image link
setElementAttribute(instructorHeaderImgContainer,{
    "style":
    `
    box-sizing :border-box;
    display :block;
    padding :0px;
    margin :0px;
    position :relative;
    `
})
setElementAttribute(instructorHeaderImgContainerAnchorLink,
    {
        "style":
        `
        align-items: center;
        background-color: rgba(0, 0, 0, 0);
        border :0px none rgb(109, 40, 210);
        border-radius :4px;
        box-sizing :border-box;
        cursor :pointer;
        display :inline-flex;
        height :40px;
        justify-content: center;
        margin :12px 0px ;
        max-width  :100%;
        min-width :0px;
        padding :0px 4px;
        position :relative;
        vertical-align: bottom;
        `,
        "href":"../../instructor/HTML/profile.html",
        "alt":"edit"
    })
setElementAttribute(instructorHeaderImgContainerImg,
    {
        "style":
        `
            align-items :center;
            aspect-ratio :auto 32 / 32;
            background-clip :border-box;
            background-color :rgba(0, 0, 0, 0);
            background-origin :padding-box;
            border-radius :1000px;
            border-top-style solid rgb(209, 210, 224);
            border : .8px solid 
            box-sizing: border-box;
            cursor :pointer;
            display :flex;
            height : 32px;
            justify-content :center ;
            margin :8px ;
            max-width :100%;
            object-fit :cover;
            overflow-clip-margin :content-box;
            overflow-x : clip;
            overflow-y :clip ;
            padding :0px;
            vertical-align :middle;
            width :32px;
        `,
        "src":"../../imagee/img1.png",
        "alt":"personal image",
    }
)

//################## ######### Events ######################
let Eventcounter =0 ;
dropDownListConainer.onclick =function()
{
    Eventcounter++;
    if(Eventcounter == 1)
    {
        updateStyleAtrributes(instrcutorPageAsideBar,"left","2px");
    }
    else{
        Eventcounter=0;
        updateStyleAtrributes(instrcutorPageAsideBar,"left","-330px");
    }
}
/*
************************* nav section end **********************
##############################  ##################################
*/

/*##############################  ##################################
************************* Instructor Aside Bar ***********************
#####################################################################*/
let instrcutorPageAsideBarContainer =creatElement_("section");
let instrcutorPageAsideBarList =creatElement_("ul");
let instrcutorPageAsideBarListItems =[];
let instrcutorPageAsideBarAnchorLinks =[];
let instrcutorPageAsideBarAnchorLinksText =[]
let instrcutorPageAsideBarAnchorLinksTextNode =["Creat Exam","Creat Session","Show Exam","Show Session","Creat Course","Show all Courses","Show All Students"];

instrcutorPageAsideBar.appendChild(instrcutorPageAsideBarContainer);
instrcutorPageAsideBarContainer.appendChild(instrcutorPageAsideBarList);

for(let i=0 ; i<instrcutorPageAsideBarAnchorLinksTextNode.length ;i++)
{
    instrcutorPageAsideBarListItems[i]=creatElement_("li");
    instrcutorPageAsideBarAnchorLinks[i]=creatElement_("a");
    instrcutorPageAsideBarAnchorLinksText[i]=createTextNode_(instrcutorPageAsideBarAnchorLinksTextNode[i]);

    instrcutorPageAsideBarListItems[i].appendChild(instrcutorPageAsideBarAnchorLinks[i]);
    instrcutorPageAsideBarAnchorLinks[i].appendChild(instrcutorPageAsideBarAnchorLinksText[i]);
    instrcutorPageAsideBarList.appendChild(  instrcutorPageAsideBarListItems[i]);
}

setElementAttribute(instrcutorPageAsideBar ,
    {
        "style":
        `
            position:fixed ;
            left :-330px;
            top:12vh;
            transition: 0.3s ;
        `
    })
setElementAttribute(instrcutorPageAsideBarContainer,
    {
        "style":
        `
        background-image: linear-gradient(rgba(189, 114, 198, 0.98),rgba(129, 183, 203, 0));
        // background-color:blueviolet;
        border-radius:0px 4px 4px 0px ;
        width: 17vw;
        
        `
    }
)
setElementAttribute(instrcutorPageAsideBarList ,
    {"style":
        `
        box-sizing: border-box;
        padding :10px 0px;
        list-style-type: none;
        `
    }
)
let instrcutorPageAsideBarListItemsStyle= {
    "style":
    `
        box-sizing: border-box;
        border-radius:10px;
        margin:3vh 0px 0px 0px;
        background-color:rgba(255, 255, 255, 0.8);
        padding: 2vh 4px;
    `
}
let instrcutorPageAsideBarAnchorLinksStyle={
    "style":
    `
    color  :rgb(48, 49, 65);
    cursor :pointer;
    font-family : -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size :2.3vh;
    font-weight :800;
    // height :10vh;
    letter-spacing :normal;
    line-height :16.8px;
    text-decoration-line :none;
    text-decoration-style :solid;
    text-decoration-thickness :auto;
    text-size-adjust :100%;
    text-wrap-mode: nowrap;
    user-select :none;
    vertical-align :bottom;
    white-space-collapse :collapse;
    text-decoration: none;
    `,
    "href":""
}
let pagesLinks=["../creatExam/main.html","../creatSession/main.html","../showExam/main.html",
                    "../showSession/main.html","../creatCourse/main.html","../showCourse/main.html"]
for(let i=0 ; i<instrcutorPageAsideBarListItems.length ;i++)
{
    setElementAttribute(instrcutorPageAsideBarListItems[i],instrcutorPageAsideBarListItemsStyle);
    setElementAttribute(instrcutorPageAsideBarAnchorLinks[i],instrcutorPageAsideBarAnchorLinksStyle);
    setElementAttribute(instrcutorPageAsideBarAnchorLinks[i],{"href":pagesLinks[i]})
}

//##################### Instructor Aside Bar end ###############


//##################### create course functions ################
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("courseForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get course data from form
        const course = {
            name: document.getElementById("courseName").value,
            creationDate: document.getElementById("creationDate").value,
            endDate: document.getElementById("endDate").value,
            description: document.getElementById("courseDescription").value,
            link: document.getElementById("courseLink").value,
            price: parseFloat(document.getElementById("price").value)
        };

        // Save to loggedTeacher.InstructorCourses
        let loggedTeacher = JSON.parse(localStorage.getItem("loggedTeacher"));

        if (!loggedTeacher) {
            alert("No logged-in teacher found.");
            return;
        }

        if (!Array.isArray(loggedTeacher.InstructorCourses)) {
            loggedTeacher.InstructorCourses = [];
        }

        loggedTeacher.InstructorCourses.push(course);
        localStorage.setItem("loggedTeacher", JSON.stringify(loggedTeacher));

        alert("Course saved successfully!");
        form.reset();
    });
});

//##################### create course functions end ################

// style in js

// document.addEventListener("DOMContentLoaded", () => {
//     // Apply global styles to all elements
//     document.querySelectorAll("*").forEach(el => {
//         el.style.margin = "0";
//         el.style.padding = "0";
//         el.style.boxSizing = "border-box";
//         el.style.fontFamily = "Arial, sans-serif";
//     });

//     // Body style
//     Object.assign(document.body.style, {
//         display: "flex",
//         height: "100vh"
//     });

//     // Sidebar
//     document.querySelectorAll(".sidebar").forEach(sidebar => {
//         Object.assign(sidebar.style, {
//             width: "250px",
//             backgroundColor: "#333",
//             color: "white",
//             display: "flex",
//             flexDirection: "column",
//             paddingTop: "20px"
//         });

//         // Sidebar buttons
//         sidebar.querySelectorAll("button").forEach(button => {
//             Object.assign(button.style, {
//                 backgroundColor: "#444",
//                 color: "white",
//                 border: "none",
//                 padding: "15px",
//                 margin: "10px",
//                 textAlign: "left",
//                 cursor: "pointer",
//                 width: "80%",
//                 borderRadius: "5px"
//             });

//             button.addEventListener("mouseover", () => {
//                 button.style.backgroundColor = "#555";
//             });

//             button.addEventListener("mouseout", () => {
//                 button.style.backgroundColor = "#444";
//             });
//         });
//     });

//     // Main content
//     const mainContent = document.querySelector(".main-content");
//     if (mainContent) {
//         Object.assign(mainContent.style, {
//             flexGrow: "1",
//             padding: "20px",
//             backgroundColor: "#f4f4f4"
//         });
//     }

//     // Header
//     const header = document.querySelector(".header");
//     if (header) {
//         Object.assign(header.style, {
//             backgroundImage: "linear-gradient(#C3C1F3, rgb(241, 242, 247))",
//             color: "white",
//             textAlign: "center",
//             padding: "15px",
//             fontSize: "20px"
//         });
//     }

//     // Dashboard content
//     const dashboard = document.querySelector(".dashboard-content");
//     if (dashboard) {
//         Object.assign(dashboard.style, {
//             marginTop: "70px",
//             backgroundColor: "white",
//             padding: "20px",
//             borderRadius: "10px",
//             boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
//         });

//         dashboard.querySelectorAll("input, select").forEach(el => {
//             Object.assign(el.style, {
//                 padding: "10px",
//                 marginRight: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px"
//             });
//         });
//     }

//     // All inputs
//     document.querySelectorAll("input").forEach(input => {
//         Object.assign(input.style, {
//             padding: "10px",
//             width: "100%",
//             margin: "10px 0",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             display: "block"
//         });
//     });

//     // Black button
//     document.querySelectorAll(".black-button").forEach(button => {
//         Object.assign(button.style, {
//             backgroundColor: "#908e8e",
//             color: "white",
//             padding: "10px 20px",
//             border: "none",
//             cursor: "pointer",
//             borderRadius: "5px",
//             marginTop: "10px"
//         });

//         button.addEventListener("mouseover", () => {
//             button.style.backgroundColor = "#434040";
//         });

//         button.addEventListener("mouseout", () => {
//             button.style.backgroundColor = "#908e8e";
//         });
//     });
// });


window.onload = loadCourses;