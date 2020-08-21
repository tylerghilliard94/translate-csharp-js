function main() {
  // Put your code here
  console.log("Do you believe in magic?");
  console.log("------------------------");


  const GetAllSpells = () => {
    let spellList = []
    spellList = [
      {
        Name: "Turn enemy into a newt",
        IsEvil: true,
        EnergyReqired: 5.1
      },
      {
        Name: "Conjure some gold for a local charity",
        IsEvil: false,
        EnergyReqired: 2.99
      },
      {
        Name: "Give a deaf person the ability to heal",
        IsEvil: false,
        EnergyReqired: 12.2
      },
      {
        Name: "Make yourself emperor of the universe",
        IsEvil: true,
        EnergyReqired: 100.0
      },
      {
        Name: "Convince your relatives your political views are correct",
        IsEvil: false,
        EnergyReqired: 2921.5
      }
    ]
    return spellList
  }
  let allSpells = GetAllSpells();
  let SpellBook = {

    goodBook: {},
    evilBook: {}
  }

  const MakeGoodSpellBook = (allSpells) => {

    SpellBook.goodBook.Title = "Good Book";

    SpellBook.goodBook.Spells = allSpells.filter(spell => !spell.IsEvil)


  }
  const MakeEvilSpellBook = (allSpells) => {

    SpellBook.evilBook.Title = "Evil Book";

    SpellBook.evilBook.Spells = allSpells.filter(spell => spell.IsEvil)


  }
  MakeGoodSpellBook(allSpells);
  MakeEvilSpellBook(allSpells);



  const DisplaySpellBook = (book) => {
    console.log(book.Title);
    book.Spells.forEach(spell => {
      {
        console.log(spell.Name);
      }
    })

  }
  DisplaySpellBook(SpellBook.goodBook)
  console.log("  ")
  DisplaySpellBook(SpellBook.evilBook)
}

main();