import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import EnvronmentalCard from "../veganguidepage/EnvironmentalCard";

function VeganBooks() {
  const card = [
    {
      title: "The Skeptical Vegan - Eric C. Lindstrom",
      desc: "This is my absolute favourite of all books on veganism so far. It's the tale of Eric's journey from massive meat eater todevoted vegan - and had me laughing out loud throughout. As well as lots of humour, this book addresses all theserious issues surrounding veganism, and doesn't get too heavy into the science. It's a great place to start for new or aspiring vegans, and a light-hearted enjoyable read for those already on a plant-based diet. If you've got kids then don't miss his sequel - The Smart Parent's Guide to Raising Vegan Kids.",
    },
    {
      title: "The China Study - T. Colin Campbell",
      desc: "The most comprehensive study of nutrition ever completed. In his book, Dr T.Colin Campbell reveals the direct links between the food we eat and diseases such as cancer and cancer, and advocates plants as the best way to eat for health. He also virtues plants as providing everything the human body needs, from protein to essential vitamins and minerals. If you like facts and figures this book will provide you with all the stats you need, from years of research, to reinforce and defend your food choices.",
    },
    {
      title: "Eating Animals - Jonathan Safran Foer",
      desc: "The book that inspired the documentary of the same name, Eating Animals investigates the morals behind the food choices meat eaters make. Told from his personal philosophical journey, the author questions our food traditions and practises. I listened to this one on audio book and had to take regular breaks - it's pretty heavy hitting emotionally and beautifully written.",
    },
    {
      title: "Why We Love Dogs, Eat Pigs and Wear Cows - Melanie Joy",
      desc: "The author of this book invented the term `carnism` and delves deep into the philosophy of meat eaters and their belief system. She believes that there is no such thing as an ethical meat eater, and explores the psychology of our perceptions of animals.",
    },
    {
      title: "Eat Like You Care - Gary L. Francione & Anna Charlton",
      desc: "An Examination of the Morality of Eating Animals. The 2 long term vegan authors of this book pull apart 30+ most heard objections to veganism, and show why there is no other ethical way to eat.",
    },
    {
      title:
        "Gristle - From Factory Farms to Food Safety - edited by Moby and Miyun Park",
      desc: "A collection of essays written by a diverse sector of society, and compiled by the famous vegan musician Moby. If you needed any more reasons to go vegan you'll find some in here for sure.",
    },
    {
      title: "The Plant Based Journey - Lani Muelrath",
      desc: "A Step-by-Step Guide for Transitioning to a Healthy Lifestyle and Achieving Your Ideal Weight. This book is full of practical advice on how to lead a vegan lifestyle the healthy way.",
    },
    {
      title: "Meathooked - Marta Zaraska",
      desc: "The History and Science of Our 2.5-Million-Year Obsession with Meat. An entertaining and eye-opening book about our age-old obsession with eating animal protein. Why are we so hooked despite knowing the damage it does to our bodies and planet? Marta travels the world to answer these questions",
    },
    {
      title: "The Pleasure Trap - Alan Goldhamer and Douglas J. Lyle",
      desc: "Mastering the Hidden Force That Undermines Health and Happiness. This book enforces how the choices we make in our diet contribute directly to our quality of life and wellbeing.",
    },
    {
      title: "How to Create a Vegan World - Tobias Leenaert",
      desc: "This book offers fresh insights on what we can do as a society to move away from the harmful and inhumane animal practises so prevalent across the world today.",
    },
    {
      title: "Farmageddon - Philip Lymbery with Isabel Oakeshott",
      desc: "The True Cost of Cheap Meat. The author spent 3 years travelling the world to compile the information for this book, documenting the effect of farming for food",
    },
    {
      title: "Meatonomics - David Robinson Simon",
      desc: "How the Rigged Economics of Meat and Dairy Make You Consume Too Much and How to Eat Better, Live Longer, and Spend Smarter. This book uncovers the level of manipulation in the industries making our food choices for us.",
    },
    {
      title: "Proteinaholic - Garth Davis",
      desc: "How Our Obsession with Meat Is Killing Us and What We Can Do About It. The author is an acclaimed surgeon, with some very strong advice on what we need to do to get, and stay, healthy.",
    },
    {
      title: "How Not to Die - Michael Grager",
      desc: "The author examines the top 15 causes of death in America and instructs how the majority can be avoided - all through diet choices.",
    },
    {
      title: "The Ethics of What We Eat - Peter Singer and Jim Mason",
      desc: "The authors document why we eat what we eat and why our food choices matters so much.",
    },
    {
      title: "Vegan - the New Ethics of Eating - Eric Marcus",
      desc: "Packed with information on how what you eat affects the planet and your body, this book also demonstrates how simple changes can be highly significant.",
    },
    {
      title: "Animal Liberation - Peter Singer",
      desc: "A New Ethics for Our Treatment of Animals. Written in 1975 this is one of the original vegan books and is now a classic. A must read for all vegans",
    },
    {
      title: "E-Book - Earthling Ed",
      desc: "30 Non-Vegan Excuses and How To Respond To Them. This is a free vegan book download that you can access to provide you with all the ammunition you need to advocate for animals with your food choices. It can be downloaded in different languages, and has over 122 pages of vegan knowledge inside.",
    },
    {
      title: "Striking at the Roots - Mark Hawthorne",
      desc: "One of the first vegan books I read, this is a practical guide on how you can speak out for animals in a practical way. Going vegan is just the first step - and this book is perfect for those wanting to take action against speciesism and animal cruelty",
    },
    {
      title: "Some We Love, Some We Hate, Some We Eat - Hal Herzog",
      desc: "The author, an anthrozoologist, has spent years researching the complex relationship we humans have with animals, and how we choose to eat certain animals yet make others part of our family.",
    },
  ];
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <section className="py-14 xl:px-60 px-4">
        <h1 className="text-4xl text-primary-1 mb-20 text-center">
          Vegan Books
        </h1>
        <div className="space-y-8">
          {card.map((item, index) => (
            <EnvronmentalCard key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default VeganBooks;
