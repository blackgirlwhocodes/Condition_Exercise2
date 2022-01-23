const name1 = "Val";
const name2 = "Valerie";
const name3 = "Valerie Cook";

if (name1.length > name2.length && name1.length > name3.length){
    console.log (name1 + "has the longest name");

} else if (name2.length > name1.length && name2.length > name3.length){
    console.log (name2 + "has the longest name");
} else if (name3.length > name2.length && name3.length > name1.length){
    console.log (name3 + "has the longst name");
} else if (name1.length === name2.length && name1.length > name2.length){
    console.log (name1 + " and " + name2 + "tie for the longest name");
} else if (name2.length === name3.length && name2.length > name1.length){
    console.log (name2 + name3 + "and" name1 + " tie for longest name");
} else if (name2.length === name3.length && name1.length && name2.length){
    console.log (name1 + name2 + name3 + "and" + "All tie for longest name")
}
