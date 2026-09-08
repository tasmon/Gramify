/* My Gramify — Reference content, written from scratch. */
window.PARTS = [
  { id: 1, title: "Word Classes" },
  { id: 2, title: "Sentence Grammar" },
  { id: 3, title: "Tense, Aspect, and Voice" },
  { id: 4, title: "Modality and Condition" },
  { id: 5, title: "Agreement and Modification" },
  { id: 6, title: "Mechanics and Usage" }
];

window.CHAPTERS = [

{
  id: "nouns", part: 1, number: 1, title: "Nouns",
  summary: "Common and proper nouns, countable and uncountable nouns, and how nouns form plurals and possessives.",
  sections: [
    { heading: "What a noun does",
      body: [
        "A noun names a person, place, thing, or idea. It can be the subject of a sentence (the doer), the object (the thing acted on), or sit after a preposition. Recognising nouns matters because almost every other rule in this book — agreement, articles, pronouns — is really a rule about how nouns behave.",
        "Nouns fall into two broad categories that affect grammar directly: common nouns name a general class of thing (a city, a scientist), while proper nouns name one specific, unique thing and are capitalised (Paris, Marie Curie)."
      ],
      examples: [
        { text: "The scientist published her results in a journal.", note: "scientist, results, and journal are common nouns." },
        { text: "Marie Curie won the Nobel Prize twice.", note: "Marie Curie and Nobel Prize are proper nouns and are capitalised." }
      ]
    },
    { heading: "Countable and uncountable nouns",
      body: [
        "Countable nouns can be counted one by one and have a plural form: one book, two books. Uncountable nouns name things treated as a whole or a substance — you don't usually count them individually, and they have no plural: water, advice, furniture, information.",
        "This distinction controls several other choices: countable nouns take a/an in the singular and many/few for quantity; uncountable nouns take much/little and no a/an. Mixing these up is one of the most common learner errors in English."
      ],
      examples: [
        { text: "She gave me some useful advice.", note: "advice is uncountable — never 'an advice' or 'advices'." },
        { text: "I bought three chairs for the kitchen.", note: "chairs is countable, so it takes a number and a plural -s." },
        { text: "There isn't much furniture in the flat yet.", note: "furniture is uncountable, so it takes much, not many." }
      ]
    },
    { heading: "Forming plurals",
      body: [
        "Most nouns simply add -s. Nouns ending in s, x, ch, or sh add -es, and a consonant followed by y changes to -ies. A working set of irregular plurals doesn't follow any rule and simply has to be learned: child/children, mouse/mice, foot/feet, person/people. A few nouns, like sheep and fish, are identical in the singular and plural."
      ],
      examples: [
        { text: "box → boxes, city → cities, boy → boys (a vowel before y just adds -s)" },
        { text: "child → children, tooth → teeth, man → men" }
      ]
    },
    { heading: "Possessive nouns",
      body: [
        "To show ownership, add 's to a singular noun, even one that already ends in s (James's book). For a plural noun that already ends in s, add only an apostrophe (the students' books). Irregular plurals that don't end in s take 's as usual (the children's toys)."
      ],
      examples: [
        { text: "the dog's lead (one dog)" },
        { text: "the dogs' owners (several dogs)" }
      ]
    }
  ],
  mistakes: [
    { wrong: "I need an advice about my visa.", right: "I need some advice about my visa.", why: "Advice is uncountable — it never takes a/an, and its plural 'advices' doesn't exist in standard English." },
    { wrong: "She has three childs.", right: "She has three children.", why: "Child has an irregular plural: children, not childs." },
    { wrong: "The companies' headquarter is in Tokyo.", right: "The company's headquarters is in Tokyo.", why: "For one company, the apostrophe goes before the s; headquarters is normally treated as singular here." }
  ],
  recap: [
    "Common nouns are general; proper nouns are specific and capitalised.",
    "Countable nouns have a plural and take a/an; uncountable nouns don't.",
    "Regular plurals add -s/-es; a set of common nouns is irregular and must be memorised.",
    "Singular possessive: add 's. Plural possessive (ending in s): add only an apostrophe."
  ]
},

{
  id: "pronouns", part: 1, number: 2, title: "Pronouns",
  summary: "Personal, possessive, and reflexive pronouns, and how to choose subject vs. object forms correctly.",
  sections: [
    { heading: "Why pronouns exist",
      body: [
        "A pronoun stands in for a noun so you don't have to repeat it. 'Maria said Maria would call Maria's mother' is grammatically legal but absurd; pronouns fix that: 'Maria said she would call her mother.' The noun a pronoun replaces is called its antecedent, and the two must agree in number and gender."
      ],
      examples: [
        { text: "Tom forgot his umbrella, so he got wet.", note: "his and he both refer back to Tom." }
      ]
    },
    { heading: "Subject and object pronouns",
      body: [
        "English pronouns change form depending on their job in the sentence. Subject pronouns (I, you, he, she, it, we, they) perform the action. Object pronouns (me, you, him, her, it, us, them) receive the action or follow a preposition. Native speakers rarely confuse the easy cases, but pairs like 'between you and I' (wrong) versus 'between you and me' (right) trip up even confident writers, because a preposition always takes an object pronoun."
      ],
      examples: [
        { text: "She invited him to the party.", note: "She (subject) performs the inviting; him (object) receives it." },
        { text: "This is a secret between you and me.", note: "Not 'I' — between is a preposition, so it takes the object form." }
      ]
    },
    { heading: "Possessive pronouns vs. possessive adjectives",
      body: [
        "Possessive adjectives (my, your, his, her, its, our, their) sit directly before a noun: my book. Possessive pronouns (mine, yours, his, hers, its, ours, theirs) stand alone, replacing the noun entirely, and never take an apostrophe. Confusing its (possessive) with it's (a contraction of 'it is') is probably the single most common punctuation error in English."
      ],
      examples: [
        { text: "Is this bag yours?", note: "yours stands alone — never 'your's'." },
        { text: "The cat licked its paw.", note: "its shows possession; no apostrophe." },
        { text: "It's going to rain.", note: "It's = it is, with an apostrophe." }
      ]
    },
    { heading: "Reflexive pronouns",
      body: [
        "Reflexive pronouns (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves) are used when the subject and the object of a verb are the same person or thing, or for emphasis. They should not be used simply as a more 'polite'-sounding substitute for me or I, which is a common overcorrection."
      ],
      examples: [
        { text: "She taught herself to code.", note: "The subject (she) and object are the same person." },
        { text: "Please send the invoice to John or me.", note: "Not 'John or myself' — there's no reflexive relationship here." }
      ]
    }
  ],
  mistakes: [
    { wrong: "Me and him went to the shop.", right: "He and I went to the shop.", why: "Both pronouns are the subject of 'went', so both need the subject form: he and I." },
    { wrong: "This is her's, not their's.", right: "This is hers, not theirs.", why: "Possessive pronouns (hers, theirs, yours, ours) never take an apostrophe." },
    { wrong: "Please contact myself if you have questions.", right: "Please contact me if you have questions.", why: "There's no reflexive relationship, so the plain object pronoun me is correct, not myself." }
  ],
  recap: [
    "Subject pronouns act; object pronouns are acted upon or follow a preposition.",
    "Possessive adjectives (my, her) sit before a noun; possessive pronouns (mine, hers) stand alone and take no apostrophe.",
    "its = possessive; it's = it is.",
    "Reflexive pronouns are for when the subject and object are the same, not as a substitute for me/I."
  ]
},

{
  id: "verbs", part: 1, number: 3, title: "Verbs",
  summary: "Action and linking verbs, regular vs. irregular forms, and transitive vs. intransitive verbs.",
  sections: [
    { heading: "The engine of the sentence",
      body: [
        "A verb expresses an action (run, decide, build) or a state (be, seem, own). Every complete sentence needs at least one verb tied to a subject. Verbs are also the part of speech that carries tense — the marker of when something happens — which is why tenses get an entire section of this book to themselves."
      ]
    },
    { heading: "Action verbs vs. linking verbs",
      body: [
        "Action verbs describe something the subject does. Linking verbs (be, seem, become, appear, and sensory verbs like look, taste, feel when used this way) don't show action — they connect the subject to a description of it. This matters for word choice: a linking verb is followed by an adjective describing the subject, not an adverb describing the verb."
      ],
      examples: [
        { text: "The soup tastes good.", note: "Linking verb + adjective. Not 'tastes well', unless you mean the soup has a working sense of taste." },
        { text: "She sang beautifully.", note: "Action verb + adverb, describing how she sang." }
      ]
    },
    { heading: "Regular and irregular verbs",
      body: [
        "Regular verbs form the past simple and past participle by adding -ed (walk → walked → walked). Irregular verbs change form unpredictably and have to be learned individually: go → went → gone, write → wrote → written. English has over 100 common irregular verbs, and they include some of the most frequently used verbs in the language (be, have, do, say, get, make), so they're worth memorising early rather than avoiding."
      ]
    },
    { heading: "Transitive and intransitive verbs",
      body: [
        "A transitive verb needs a direct object to complete its meaning (she borrowed a pen — you can't just 'borrow'). An intransitive verb is complete without one (she arrived). Some verbs can work both ways depending on the sentence, and a few pairs are commonly confused because one is transitive and the other isn't: lie (intransitive: to recline) versus lay (transitive: to put something down)."
      ],
      examples: [
        { text: "I lay the book on the table.", note: "lay is transitive — it takes an object, 'the book'." },
        { text: "I lie down when I'm tired.", note: "lie is intransitive — no object follows." }
      ]
    }
  ],
  mistakes: [
    { wrong: "The cake tastes deliciously.", right: "The cake tastes delicious.", why: "Taste is a linking verb here, so it's followed by an adjective (delicious), not an adverb." },
    { wrong: "I'm going to lay down for an hour.", right: "I'm going to lie down for an hour.", why: "Lie is intransitive (no object); lay needs an object, as in 'lay the blanket down'." },
    { wrong: "She goed to the market.", right: "She went to the market.", why: "Go is irregular: go / went / gone, not 'goed'." }
  ],
  recap: [
    "Action verbs show what the subject does; linking verbs connect the subject to a description and are followed by adjectives.",
    "Regular verbs add -ed for the past; irregular verbs change form and must be memorised individually.",
    "Transitive verbs require a direct object; intransitive verbs don't.",
    "Lie (recline, intransitive) and lay (put down, transitive) are commonly confused."
  ]
},

{
  id: "adjectives-adverbs", part: 1, number: 4, title: "Adjectives and Adverbs",
  summary: "How adjectives modify nouns and adverbs modify everything else, plus comparative and superlative forms.",
  sections: [
    { heading: "What each one modifies",
      body: [
        "An adjective describes a noun or pronoun (a quiet street). An adverb describes a verb, an adjective, another adverb, or a whole sentence (she walked quietly; a remarkably quiet street; she walked very quietly). Many adverbs are formed by adding -ly to an adjective (quiet → quietly), but not all words ending in -ly are adverbs (friendly is an adjective), and not all adverbs end in -ly (fast, well, hard)."
      ],
      examples: [
        { text: "He is a careful driver.", note: "careful is an adjective describing 'driver'." },
        { text: "He drives carefully.", note: "carefully is an adverb describing 'drives'." }
      ]
    },
    { heading: "Comparatives and superlatives",
      body: [
        "To compare two things, use the comparative form; to single out one from a group of three or more, use the superlative. Short adjectives (one syllable, or two ending in -y) add -er/-est: tall → taller → tallest; happy → happier → happiest. Longer adjectives use more/most instead of changing the word: expensive → more expensive → most expensive. A handful of common words are irregular: good → better → best; bad → worse → worst; far → further → furthest."
      ],
      examples: [
        { text: "This road is busier than the last one.", note: "Two-syllable adjective ending in -y: add -ier." },
        { text: "That was the most interesting lecture I've attended.", note: "Longer adjective: use most, not '-est'." }
      ]
    },
    { heading: "Order of adjectives",
      body: [
        "When several adjectives stack up before a noun, native speakers follow an unconscious order: opinion, size, age, shape, colour, origin, material, purpose. 'A lovely small old wooden table' sounds natural; 'a wooden old small lovely table' doesn't, even though nothing is technically ungrammatical about the individual words."
      ]
    }
  ],
  mistakes: [
    { wrong: "She sings beautiful.", right: "She sings beautifully.", why: "Sings is an action verb, so it needs an adverb (beautifully) to describe how she sings, not an adjective." },
    { wrong: "This is the most easiest way to do it.", right: "This is the easiest way to do it.", why: "Don't combine most with an -est ending — choose one form of the superlative, not both." },
    { wrong: "He did good on the test.", right: "He did well on the test.", why: "Good is an adjective; well is the adverb needed here to describe how he did." }
  ],
  recap: [
    "Adjectives modify nouns; adverbs modify verbs, adjectives, other adverbs, or whole sentences.",
    "Short adjectives take -er/-est; longer adjectives take more/most — never both.",
    "A few common adjectives (good, bad, far) have irregular comparative and superlative forms.",
    "Stacked adjectives follow a conventional order: opinion, size, age, shape, colour, origin, material, purpose."
  ]
},

{
  id: "prepositions-conjunctions", part: 1, number: 5, title: "Prepositions and Conjunctions",
  summary: "Prepositions of time, place, and movement, fixed preposition pairings, and the main types of conjunction.",
  sections: [
    { heading: "What prepositions do",
      body: [
        "A preposition shows the relationship between a noun (or pronoun) and other words in the sentence — usually relationships of time (at, on, in), place (under, between, near), or direction (to, from, through). Prepositions are notoriously hard to master by rule alone because usage is often idiomatic rather than logical, and the safest way to learn them is by memorising fixed phrases rather than deriving them from first principles."
      ],
      examples: [
        { text: "The meeting is on Monday, at 9am, in the main office.", note: "on for days, at for clock times, in for enclosed spaces and months/years." },
        { text: "She's interested in history and good at languages.", note: "Fixed pairings: interested in, good at — these simply have to be learned." }
      ]
    },
    { heading: "Common time prepositions",
      body: [
        "Use at for precise points in time (at 9am, at night, at the weekend in British English), on for days and dates (on Monday, on 5 May), and in for longer periods — months, years, seasons, and parts of the day other than night (in June, in 2020, in the morning)."
      ]
    },
    { heading: "Coordinating vs. subordinating conjunctions",
      body: [
        "Coordinating conjunctions join two grammatically equal elements — the acronym FANBOYS covers them all: for, and, nor, but, or, yet, so. Subordinating conjunctions (because, although, if, when, since, unless) join a main clause to a dependent one, and the resulting sentence can't stand as two separate complete sentences without changing the meaning."
      ],
      examples: [
        { text: "She was tired, but she finished the report.", note: "Two independent clauses joined by a coordinating conjunction." },
        { text: "Although she was tired, she finished the report.", note: "One dependent and one independent clause, joined by a subordinating conjunction." }
      ]
    },
    { heading: "Correlative conjunctions",
      body: [
        "Correlative conjunctions work in matching pairs: both...and, either...or, neither...nor, not only...but also. The grammar on both sides of the pair should be parallel — the same kind of phrase or clause — which is the rule writers most often break with this construction."
      ],
      examples: [
        { text: "She is both talented and hard-working.", note: "Two adjectives balance each other after both...and." },
        { text: "Not only did he apologise, but he also offered to help.", note: "Two full clauses balance each other after not only...but also." }
      ]
    }
  ],
  mistakes: [
    { wrong: "I'm good in maths.", right: "I'm good at maths.", why: "The fixed pairing is good at, not good in — this has to be memorised rather than reasoned out." },
    { wrong: "She not only cooked dinner but also she cleaned the kitchen.", right: "She not only cooked dinner but also cleaned the kitchen.", why: "For grammatical balance, both sides of not only...but also should have the same structure — here, both should be a verb phrase without repeating 'she'." },
    { wrong: "Despite of the rain, we went out.", right: "Despite the rain, we went out.", why: "Despite is never followed by 'of' — use 'despite' alone, or 'in spite of'." }
  ],
  recap: [
    "Prepositions of time: at for precise times, on for days/dates, in for longer periods.",
    "Many prepositions attach to specific words by convention (good at, interested in) and must be memorised.",
    "Coordinating conjunctions (FANBOYS) join equal elements; subordinating conjunctions attach a dependent clause to a main one.",
    "Correlative conjunctions (both...and, either...or) need parallel grammar on both sides of the pair."
  ]
},

{
  id: "articles-determiners", part: 1, number: 6, title: "Articles and Determiners",
  summary: "A, an, and the, when to use no article at all, and quantifiers like some, any, much, and many.",
  sections: [
    { heading: "A, an, and the",
      body: [
        "Use a or an with a singular countable noun the first time you mention it, or when it doesn't matter which one you mean (I saw a dog). Use the when both speaker and listener already know which specific thing is meant — because it was just mentioned, because there's only one, or because context makes it obvious (I saw the dog again — the same one as before). The choice between a and an depends on sound, not spelling: an hour (silent h, vowel sound) but a university (consonant sound /j/, despite the vowel letter)."
      ],
      examples: [
        { text: "I bought a book. The book was excellent.", note: "First mention uses a; the second mention, referring to the same book, uses the." },
        { text: "The sun rises in the east.", note: "The sun and the east are unique — both speaker and listener already know exactly what's meant." }
      ]
    },
    { heading: "When to use no article",
      body: [
        "Plural and uncountable nouns making a general statement take no article at all: children need affection, not 'the children need affection' (unless you mean a specific, already-identified group of children). Most institutions used in their general function also drop the article: go to school, in prison, at university — but the building itself, used literally, takes one: 'the school is on Elm Street'."
      ]
    },
    { heading: "Quantifiers: some, any, much, many",
      body: [
        "Some and any both mean an unspecified amount. Some is typical of positive statements and of offers/requests phrased as questions; any is typical of negatives and plain questions. Much pairs with uncountable nouns, many with countable ones — a distinction covered in more detail in the chapter on nouns."
      ],
      examples: [
        { text: "Would you like some tea?", note: "An offer, phrased as a question, still uses some." },
        { text: "I don't have any cash on me.", note: "Negative statements typically use any." }
      ]
    }
  ],
  mistakes: [
    { wrong: "She is an university professor.", right: "She is a university professor.", why: "University starts with a consonant sound (/j/), so it takes a, not an, despite starting with a vowel letter." },
    { wrong: "I love the nature.", right: "I love nature.", why: "A general, uncountable concept like nature takes no article when speaking generally." },
    { wrong: "Do you have some questions?", right: "Do you have any questions?", why: "A plain, neutral question normally takes any, not some." }
  ],
  recap: [
    "A/an introduces something new or non-specific; the refers to something already known or unique.",
    "The choice between a and an depends on the sound that follows, not the spelling.",
    "General statements with plural or uncountable nouns usually take no article.",
    "Some fits positive statements and offers; any fits negatives and plain questions."
  ]
},

{
  id: "sentence-patterns", part: 2, number: 7, title: "Subjects, Predicates, and Sentence Patterns",
  summary: "The subject-predicate split, and the five basic patterns every English sentence is built from.",
  sections: [
    { heading: "Subject and predicate",
      body: [
        "Every complete sentence splits into two parts: the subject (who or what the sentence is about) and the predicate (everything said about the subject, built around a verb). In 'The old bridge finally collapsed', 'the old bridge' is the subject and 'finally collapsed' is the predicate. Finding the subject and its verb first is the fastest way to check whether a sentence is actually complete."
      ]
    },
    { heading: "The five basic patterns",
      body: [
        "Almost every English sentence, however long, is built from one of five underlying patterns: Subject–Verb (Birds fly); Subject–Verb–Object (She read the book); Subject–Verb–Complement (He is a doctor / She seems tired); Subject–Verb–Indirect Object–Direct Object (She gave him a gift); and Subject–Verb–Object–Complement (They elected her president). A complement renames or describes the subject or object; an object simply receives the action."
      ],
      examples: [
        { text: "The train arrived.", note: "Subject–Verb: complete with nothing else needed." },
        { text: "She told him the truth.", note: "Subject–Verb–Indirect Object–Direct Object: him receives 'the truth'." }
      ]
    },
    { heading: "Direct objects vs. subject complements",
      body: [
        "A direct object receives the action of a transitive verb (she baked a cake — the cake is baked). A subject complement follows a linking verb and describes or renames the subject rather than receiving an action (she became a doctor — she and doctor are the same person, not something acted upon). Mixing these up leads to the same errors covered under linking verbs: using an adverb where a complement adjective is needed."
      ]
    }
  ],
  mistakes: [
    { wrong: "Yesterday at the market with my sister.", right: "Yesterday, I went to the market with my sister.", why: "The original has no subject or main verb — it's a fragment, not a sentence, however long it looks." },
    { wrong: "The manager gave a bonus to employee.", right: "The manager gave the employee a bonus.", why: "A specific, previously identifiable employee needs an article (the), and the indirect object usually comes before the direct object without 'to' in this pattern." }
  ],
  recap: [
    "Every sentence needs a subject and a predicate built around a verb.",
    "Most English sentences follow one of five patterns: SV, SVO, SVC, SVIO DO, or SVOC.",
    "A direct object receives an action; a subject complement renames or describes the subject after a linking verb."
  ]
},

{
  id: "phrases-clauses", part: 2, number: 8, title: "Phrases and Clauses",
  summary: "The difference between a phrase and a clause, and independent vs. dependent clauses.",
  sections: [
    { heading: "Phrases: groups without a subject-verb pair",
      body: [
        "A phrase is a group of related words that lacks a subject paired with a verb, and functions as a single unit — a noun phrase, verb phrase, or prepositional phrase, among others. 'The tall man in the grey coat' is a noun phrase: a lot of words, but no subject performing a verb, so it can't stand alone as a sentence."
      ],
      examples: [
        { text: "walking down the street (participle phrase)" },
        { text: "in the middle of the night (prepositional phrase)" }
      ]
    },
    { heading: "Clauses: independent and dependent",
      body: [
        "A clause does contain a subject and a verb. An independent clause expresses a complete thought and can stand alone as a sentence ('The rain stopped'). A dependent (or subordinate) clause also has a subject and verb, but starts with a word — because, although, when, that, who — that makes it incomplete on its own, dependent on an independent clause to finish the thought ('because the rain stopped')."
      ],
      examples: [
        { text: "Because the rain stopped, we went outside.", note: "A dependent clause attached to an independent one; together, one complete sentence." }
      ]
    },
    { heading: "Why the distinction matters",
      body: [
        "This distinction underlies two of the most common sentence-level errors covered later in this book: the sentence fragment (treating a dependent clause or a phrase as if it were a complete sentence) and the run-on sentence (joining two independent clauses with no punctuation or conjunction to separate them)."
      ]
    }
  ],
  mistakes: [
    { wrong: "Because I was late. I missed the bus.", right: "Because I was late, I missed the bus.", why: "'Because I was late' is a dependent clause and can't be punctuated as its own sentence; it needs to be joined to the independent clause that follows." }
  ],
  recap: [
    "A phrase has no subject-verb pair; a clause does.",
    "An independent clause is a complete thought and can stand alone.",
    "A dependent clause has a subject and verb but can't stand alone — it needs an independent clause to complete it."
  ]
},

{
  id: "sentence-types", part: 2, number: 9, title: "Sentence Types, Fragments, and Run-ons",
  summary: "Declarative, interrogative, imperative, and exclamatory sentences, plus how to fix fragments and run-ons.",
  sections: [
    { heading: "Four sentence types by purpose",
      body: [
        "By purpose, sentences fall into four types: declarative (states something: 'The shop closes at six'), interrogative (asks a question: 'Does the shop close at six?'), imperative (gives a command or request, with an implied 'you' as subject: 'Close the door'), and exclamatory (expresses strong feeling: 'What a mess!')."
      ]
    },
    { heading: "Simple, compound, and complex sentences",
      body: [
        "By structure, a simple sentence has one independent clause. A compound sentence joins two or more independent clauses, usually with a comma and a coordinating conjunction, or a semicolon. A complex sentence joins one independent clause with at least one dependent clause. A compound-complex sentence combines both: at least two independent clauses and one dependent one."
      ],
      examples: [
        { text: "She studied hard, and she passed the exam.", note: "Compound: two independent clauses joined by a comma + and." },
        { text: "Although it was raining, we went for a walk.", note: "Complex: one dependent clause, one independent clause." }
      ]
    },
    { heading: "Fixing fragments and run-ons",
      body: [
        "A fragment is a phrase or dependent clause incorrectly punctuated as a full sentence; fix it by attaching it to the independent clause it belongs with. A run-on sentence crams two or more independent clauses together with no punctuation, or only a comma (a version of this specific error is called a comma splice). Fix a run-on with a full stop, a semicolon, or a comma plus a coordinating conjunction."
      ],
      examples: [
        { text: "The concert was cancelled. It kept raining all evening.", note: "Fixed with a full stop between two independent clauses." },
        { text: "The concert was cancelled; it kept raining all evening.", note: "Fixed with a semicolon instead." }
      ]
    }
  ],
  mistakes: [
    { wrong: "I went to the store, I bought some milk.", right: "I went to the store, and I bought some milk.", why: "This is a comma splice — two independent clauses joined only by a comma. Add a coordinating conjunction, use a semicolon, or split into two sentences." },
    { wrong: "Running through the park every morning.", right: "I go running through the park every morning.", why: "The original is a fragment — a phrase with no subject and finite verb of its own." }
  ],
  recap: [
    "By purpose: declarative, interrogative, imperative, exclamatory.",
    "By structure: simple, compound, complex, compound-complex.",
    "A fragment is a phrase or dependent clause punctuated as if it were complete; attach it to an independent clause.",
    "A run-on (including a comma splice) joins independent clauses without correct punctuation; fix with a full stop, semicolon, or comma + conjunction."
  ]
},

{
  id: "present-past", part: 3, number: 10, title: "Present and Past Tenses",
  summary: "Present simple vs. present continuous, and past simple vs. past continuous, with the situations each one fits.",
  sections: [
    { heading: "Present simple: facts, habits, and routines",
      body: [
        "The present simple describes things that are generally true, habitual, or scheduled: facts (Water boils at 100°C), routines (She works from home on Fridays), and permanent states (He lives in Berlin). Third-person singular subjects (he, she, it, or a singular noun) add -s or -es to the verb; every other subject uses the base form."
      ],
      examples: [
        { text: "The store opens at nine every day.", note: "A routine, scheduled fact — present simple." }
      ]
    },
    { heading: "Present continuous: happening now, or arranged",
      body: [
        "The present continuous (am/is/are + -ing) describes an action in progress right now, a temporary situation, or a fixed future arrangement. It's formed with a form of be plus the -ing form of the main verb. A small set of verbs describing states rather than actions — know, believe, want, own, seem — are rarely used in the continuous form at all: 'I am knowing the answer' is wrong; 'I know the answer' is correct."
      ],
      examples: [
        { text: "She's studying for her exam right now.", note: "In progress at this moment." },
        { text: "We're meeting the Johnsons on Saturday.", note: "A fixed future arrangement, expressed with the present continuous." }
      ]
    },
    { heading: "Past simple: a finished action at a stated time",
      body: [
        "The past simple describes a completed action at a specific, implied, or understood point in the past. Regular verbs add -ed; irregular verbs change form (see the chapter on verbs). It's the tense to reach for whenever a clear past time marker is present or implied: yesterday, last week, in 2019, when I was a child."
      ],
      examples: [
        { text: "She graduated in 2018.", note: "A specific, finished point in the past — past simple, not present perfect." }
      ]
    },
    { heading: "Past continuous: an action in progress in the past",
      body: [
        "The past continuous (was/were + -ing) sets the scene for another action, usually one that interrupts it, expressed in the past simple. It emphasises that something was already underway at a given past moment."
      ],
      examples: [
        { text: "I was cooking dinner when the phone rang.", note: "The longer background action (cooking) is past continuous; the shorter interrupting action (rang) is past simple." }
      ]
    }
  ],
  mistakes: [
    { wrong: "I am knowing him for ten years.", right: "I have known him for ten years.", why: "Know is a state verb and isn't used in the continuous form; and a duration up to now needs the present perfect, not the present simple." },
    { wrong: "She go to the gym every morning.", right: "She goes to the gym every morning.", why: "Third-person singular subjects (she) need -s on the verb in the present simple." },
    { wrong: "I seen that film last week.", right: "I saw that film last week.", why: "The past simple of see is saw; seen is the past participle, used with have/has, not alone." }
  ],
  recap: [
    "Present simple: facts, routines, permanent states. Third-person singular adds -s.",
    "Present continuous: happening right now, temporary, or a fixed future arrangement.",
    "State verbs (know, want, seem, own) aren't normally used in continuous forms.",
    "Past simple: a completed action at a specific past time. Past continuous: an action in progress at a past moment, often interrupted."
  ]
},

{
  id: "perfect-continuous", part: 3, number: 11, title: "Perfect and Continuous Aspect",
  summary: "Present perfect vs. past simple, present perfect continuous, and past perfect.",
  sections: [
    { heading: "Present perfect: the past that matters now",
      body: [
        "The present perfect (have/has + past participle) links a past action to the present moment — either because it just happened, because its result still matters, or because it covers a period continuing up to now. This is the single hardest tense contrast for many learners, because the choice between present perfect and past simple depends on the speaker's framing of time, not just the facts: 'I lost my keys' (past simple: a finished event) versus 'I've lost my keys' (present perfect: and I still can't find them, right now)."
      ],
      examples: [
        { text: "She has visited Japan twice.", note: "Experience at some unspecified point up to now — no specific time is given." },
        { text: "She visited Japan in 2019.", note: "A specific, finished time is given, so the past simple is required instead." }
      ]
    },
    { heading: "For and since",
      body: [
        "With the present perfect, for measures a length of time (for five years, for a while) and since marks the starting point (since 2019, since Monday). Both signal that a state or action begun in the past continues into the present."
      ],
      examples: [
        { text: "They've lived here for six years.", note: "for + a duration." },
        { text: "They've lived here since 2020.", note: "since + a starting point." }
      ]
    },
    { heading: "Present perfect continuous",
      body: [
        "The present perfect continuous (have/has been + -ing) emphasises the duration or ongoing nature of a recent activity, often one that's still in progress or has just stopped and explains a present result. 'I've been running' (and that's why I'm out of breath now) stresses the activity itself; 'I've run ten miles' stresses the completed result."
      ]
    },
    { heading: "Past perfect: the earlier of two past events",
      body: [
        "The past perfect (had + past participle) marks whichever of two past events happened first, when both are being discussed together. Without it, a sequence of past events can become genuinely ambiguous about their order."
      ],
      examples: [
        { text: "When we arrived, the film had already started.", note: "The starting happened before the arriving — past perfect marks the earlier event." }
      ]
    }
  ],
  mistakes: [
    { wrong: "I have seen that film yesterday.", right: "I saw that film yesterday.", why: "A specific past time marker (yesterday) requires the past simple; it can't combine with the present perfect." },
    { wrong: "She is living here since 2015.", right: "She has been living here since 2015.", why: "Since needs the present perfect (continuous), not the present continuous." },
    { wrong: "By the time she called, I already left.", right: "By the time she called, I had already left.", why: "One past event happened before another already-past event, so the earlier one needs the past perfect." }
  ],
  recap: [
    "Present perfect links a past action to now; use it for experience without a specific time, or a state continuing to the present.",
    "For + duration; since + starting point.",
    "Present perfect continuous stresses the ongoing or recent nature of an activity.",
    "Past perfect marks whichever of two past events happened first."
  ]
},

{
  id: "future-forms", part: 3, number: 12, title: "Future Forms",
  summary: "Will vs. going to, the present continuous for arrangements, and the future perfect and future continuous.",
  sections: [
    { heading: "Will vs. going to",
      body: [
        "Will is used for a decision made at the moment of speaking, a promise, an offer, or a general prediction not based on present evidence. Going to is used for a plan or intention already decided before now, or a prediction based on something visible right now."
      ],
      examples: [
        { text: "The phone's ringing — I'll get it.", note: "A spontaneous decision, made right now: will." },
        { text: "I've decided — I'm going to apply for the job.", note: "A plan already formed before speaking: going to." },
        { text: "Look at those clouds — it's going to rain.", note: "A prediction based on visible present evidence: going to." }
      ]
    },
    { heading: "Present tenses for future arrangements",
      body: [
        "The present continuous often expresses a fixed future arrangement (We're flying to Rome on Tuesday), while the present simple expresses a fixed schedule or timetable (The train leaves at 6pm). Both describe the future despite using present-tense verb forms."
      ]
    },
    { heading: "Future continuous and future perfect",
      body: [
        "The future continuous (will be + -ing) describes an action that will be in progress at a specific future moment (This time tomorrow, I'll be flying home). The future perfect (will have + past participle) describes something that will already be complete by a stated future point (By next year, she will have graduated)."
      ]
    }
  ],
  mistakes: [
    { wrong: "I think it will going to rain.", right: "I think it's going to rain.", why: "Will and going to are two separate future forms and shouldn't be combined." },
    { wrong: "By 2030, she will finish her degree.", right: "By 2030, she will have finished her degree.", why: "A deadline (by 2030) for something expected to already be complete needs the future perfect, not the plain future." }
  ],
  recap: [
    "Will: spontaneous decisions, promises, offers, general predictions.",
    "Going to: prior plans and predictions based on present evidence.",
    "Present continuous / present simple can express fixed future arrangements and schedules.",
    "Future perfect (will have + past participle): complete before a future deadline. Future continuous (will be + -ing): in progress at a future moment."
  ]
},

{
  id: "active-passive", part: 3, number: 13, title: "Active and Passive Voice",
  summary: "How to form the passive, when it's the better choice, and how to avoid overusing it.",
  sections: [
    { heading: "Forming the passive",
      body: [
        "In the active voice, the subject performs the action (The chef prepared the meal). In the passive voice, the subject receives the action, and the performer is optional (The meal was prepared [by the chef]). The passive is formed with a form of be plus the past participle of the main verb, and the tense of be carries the tense of the whole sentence."
      ],
      examples: [
        { text: "The report is reviewed every month.", note: "Present simple passive: is + past participle." },
        { text: "The bridge was built in 1932.", note: "Past simple passive: was + past participle." },
        { text: "The results will be announced tomorrow.", note: "Future passive: will be + past participle." }
      ]
    },
    { heading: "When the passive is the better choice",
      body: [
        "Use the passive when the performer of the action is unknown, unimportant, or obvious from context, or when you want to emphasise the receiver of the action rather than the doer — common in scientific and formal writing, and in news reporting where the actor isn't yet known ('The building was damaged in the fire')."
      ]
    },
    { heading: "Why it's often overused",
      body: [
        "Overusing the passive tends to make writing vaguer and more distant, because it lets a writer avoid naming who is responsible for an action. 'Mistakes were made' is the textbook example of a passive sentence used to dodge accountability. As a general style rule, prefer the active voice unless you have a specific reason — clarity, emphasis, or genuine uncertainty about the actor — to choose the passive instead."
      ]
    }
  ],
  mistakes: [
    { wrong: "The vase was broke by the cat.", right: "The vase was broken by the cat.", why: "The passive needs the past participle (broken), not the past simple form (broke)." },
    { wrong: "Mistakes was made during the project.", right: "Mistakes were made during the project.", why: "Mistakes is plural, so the passive auxiliary must also be plural: were, not was." }
  ],
  recap: [
    "Passive = a form of be + the past participle; the performer is optional, introduced with 'by' if included.",
    "Use the passive when the doer is unknown, unimportant, or when the receiver of the action deserves the emphasis.",
    "Overusing the passive can make writing vague or evasive — prefer active voice by default."
  ]
},

{
  id: "reported-speech", part: 3, number: 14, title: "Reported Speech and Sequence of Tenses",
  summary: "How tenses shift when you report what someone said, and how to report questions and commands.",
  sections: [
    { heading: "The general backshift rule",
      body: [
        "When you report what someone said in the past ('She said...'), tenses generally shift one step back into the past: present becomes past, past becomes past perfect, present perfect becomes past perfect, and will becomes would. This is called backshift, and it reflects the fact that time has moved on since the original statement was made."
      ],
      examples: [
        { text: "\"I am tired,\" she said. → She said she was tired.", note: "Present simple → past simple." },
        { text: "\"I have finished,\" he said. → He said he had finished.", note: "Present perfect → past perfect." },
        { text: "\"I will call you,\" she said. → She said she would call me.", note: "Will → would." }
      ]
    },
    { heading: "Reporting questions",
      body: [
        "Reported questions lose the question mark and the inverted word order of a direct question, becoming ordinary statement order. Yes/no questions are introduced with if or whether; wh-questions keep their question word."
      ],
      examples: [
        { text: "\"Are you coming?\" she asked. → She asked if I was coming.", note: "No inversion, no question mark, and if introduces it." },
        { text: "\"Where do you live?\" he asked. → He asked where I lived.", note: "Where is kept, but the word order becomes a normal statement." }
      ]
    },
    { heading: "Reporting commands and requests",
      body: [
        "Commands and requests are reported with a verb like told or asked, followed by an object and a to-infinitive, not the imperative form itself."
      ],
      examples: [
        { text: "\"Wait here,\" he said. → He told me to wait there.", why: "" },
        { text: "\"Don't touch that,\" she said. → She told me not to touch that.", why: "" }
      ]
    },
    { heading: "When backshift doesn't apply",
      body: [
        "If the reported statement is still true or is a general fact, many speakers keep the original tense rather than shifting it: 'She said the earth orbits the sun' sounds perfectly natural, because that fact hasn't stopped being true."
      ]
    }
  ],
  mistakes: [
    { wrong: "He asked where did I live.", right: "He asked where I lived.", why: "A reported question uses normal statement word order, not the inverted order of a direct question." },
    { wrong: "She told to me to wait.", right: "She told me to wait.", why: "Tell takes a direct object without 'to' (told me), unlike say, which does use 'to' before a person (said to me)." }
  ],
  recap: [
    "Reported speech usually shifts tenses one step back: present → past, past → past perfect, will → would.",
    "Reported yes/no questions use if/whether; reported wh-questions keep the question word — both drop the question mark and inverted order.",
    "Commands and requests are reported as told/asked + object + to-infinitive.",
    "General truths and facts often keep their original tense even when reported."
  ]
},

{
  id: "modals", part: 4, number: 15, title: "Modal Verbs",
  summary: "Ability, permission, obligation, and deduction — and how modal meaning shifts in the past.",
  sections: [
    { heading: "What modals do",
      body: [
        "Modal verbs (can, could, may, might, must, shall, should, will, would) add meaning to a main verb — ability, permission, obligation, possibility, or deduction — rather than describing an action themselves. They're always followed by the base form of the verb, never a to-infinitive or -ing form, and they don't add -s for third-person singular subjects."
      ],
      examples: [
        { text: "She can speak three languages.", note: "Ability. Never 'can to speak' or 'can speaks'." }
      ]
    },
    { heading: "Obligation and prohibition",
      body: [
        "Must expresses strong obligation, often from the speaker's own judgement; have to expresses obligation coming from an outside rule or authority. The negative forms diverge sharply in meaning: mustn't means it's prohibited (you must not do this); don't have to means it's simply optional (there's no requirement either way)."
      ],
      examples: [
        { text: "Employees must wear a badge (company policy).", note: "Have to would work equally well here — this is an external rule." },
        { text: "You mustn't smoke in here.", note: "Prohibited." },
        { text: "You don't have to come if you're busy.", note: "Optional, not prohibited." }
      ]
    },
    { heading: "Deduction: must, might, can't",
      body: [
        "Modals also express how confident the speaker is about something being true. Must expresses a confident positive conclusion; can't expresses a confident negative conclusion; might/may/could express uncertainty either way."
      ],
      examples: [
        { text: "The lights are off — they must be out.", note: "Confident positive deduction." },
        { text: "She can't have forgotten — she never forgets.", note: "Confident negative deduction." }
      ]
    },
    { heading: "Modals in the past",
      body: [
        "To talk about ability, obligation, or deduction in the past, most modals combine with have + past participle rather than changing form directly. Should have expresses a regret or criticism about something that didn't happen; must have expresses a confident deduction about the past."
      ],
      examples: [
        { text: "You should have called me first.", note: "Regret/criticism about a past action that didn't happen." },
        { text: "She must have left already — her coat is gone.", note: "A confident deduction about the past." }
      ]
    }
  ],
  mistakes: [
    { wrong: "She can to swim very well.", right: "She can swim very well.", why: "Modal verbs are followed directly by the base form — never add 'to' after can." },
    { wrong: "You mustn't finish the whole report today; tomorrow is fine.", right: "You don't have to finish the whole report today; tomorrow is fine.", why: "This is optional, not prohibited, so don't have to is needed rather than mustn't." },
    { wrong: "He should have went earlier.", right: "He should have gone earlier.", why: "Should have takes the past participle (gone), not the past simple form (went)." }
  ],
  recap: [
    "Modals are followed by the base verb, with no 'to' and no -s ending.",
    "Must (internal obligation) and have to (external rule) both mean 'required'; mustn't (prohibited) and don't have to (optional) mean very different things.",
    "Must/can't express confident deductions; might/may/could express uncertainty.",
    "Past modals use have + past participle: should have, must have, could have."
  ]
},

{
  id: "conditionals", part: 4, number: 16, title: "Conditionals and the Subjunctive",
  summary: "The four conditional patterns, mixed conditionals, and the subjunctive after wish and if only.",
  sections: [
    { heading: "Zero and first conditional",
      body: [
        "The zero conditional (if/when + present simple, present simple) states a general truth or automatic result: If you heat ice, it melts. The first conditional (if + present simple, will + base verb) describes a real, likely future possibility: If it rains, we'll stay home."
      ]
    },
    { heading: "Second and third conditional",
      body: [
        "The second conditional (if + past simple, would + base verb) describes a hypothetical or unlikely present/future situation: If I won the lottery, I would travel the world. In formal style, were replaces was for every subject in the if-clause: If I were you. The third conditional (if + past perfect, would have + past participle) describes an imaginary alternative to something that already happened and can no longer be changed: If she had studied harder, she would have passed."
      ],
      examples: [
        { text: "If I had more time, I would learn the piano.", note: "Second conditional: an unlikely or imaginary present situation." },
        { text: "If they had left earlier, they wouldn't have missed the train.", note: "Third conditional: an imaginary alternative past." }
      ]
    },
    { heading: "Mixed conditionals",
      body: [
        "Real situations sometimes mix time frames: an imaginary past condition with a present result (If I had studied medicine, I would be a doctor now), or an ongoing present condition with a past result (If she weren't so cautious, she would have taken the job when it was offered). The if-clause and the result clause don't have to match the same conditional 'number'."
      ]
    },
    { heading: "The subjunctive after wish, if only, and suggest",
      body: [
        "Wish and if only followed by the past simple express a present unreal wish (I wish I knew the answer); followed by the past perfect, they express regret about the past (I wish I had studied harder). In formal English, verbs like suggest, recommend, and insist can be followed by that + subject + the base form of the verb, regardless of the subject: The doctor recommended that he rest for a week."
      ]
    }
  ],
  mistakes: [
    { wrong: "If I would have known, I would have called.", right: "If I had known, I would have called.", why: "The if-clause of a third conditional uses the past perfect (had known), not would have." },
    { wrong: "I wish I am taller.", right: "I wish I were taller.", why: "Wish about a present state uses the past simple (were, not am) — this is the subjunctive, not a real past tense." },
    { wrong: "If I was you, I'd apologise.", right: "If I were you, I'd apologise.", why: "In this fixed, formal expression, were is used for every subject, including I." }
  ],
  recap: [
    "Zero conditional: general truths. First conditional: real future possibility.",
    "Second conditional: unlikely/imaginary present. Third conditional: imaginary alternative past.",
    "Mixed conditionals combine different time frames in the if-clause and result clause.",
    "Wish/if only + past simple = present wish; + past perfect = regret about the past."
  ]
},

{
  id: "agreement", part: 5, number: 17, title: "Subject-Verb and Pronoun Agreement",
  summary: "Matching verbs to their real subject, and matching pronouns to their antecedent in number.",
  sections: [
    { heading: "The basic rule",
      body: [
        "A verb must agree in number with its subject: singular subjects take singular verbs, plural subjects take plural verbs. This sounds trivial until the subject is separated from the verb by other words, or is a tricky case like a collective noun or an indefinite pronoun."
      ]
    },
    { heading: "Tricky subjects",
      body: [
        "Phrases inserted between subject and verb (as well as, along with, together with) don't change the verb's number — the real subject still governs it. Indefinite pronouns like everyone, everybody, someone, and each are grammatically singular, even though they can feel plural in meaning. Collective nouns (team, family, government) are usually singular in American English and can be singular or plural in British English, depending on whether the group is acting as one unit or as separate individuals."
      ],
      examples: [
        { text: "The manager, along with her team, is attending the conference.", note: "'Along with her team' doesn't make the verb plural — manager is still the true subject." },
        { text: "Everyone is welcome to attend.", note: "Everyone is grammatically singular." },
        { text: "Each of the students has a locker.", note: "Each is singular, even before a plural noun (students)." }
      ]
    },
    { heading: "Or, nor, and 'one of'",
      body: [
        "When subjects are joined by or or nor, the verb agrees with the subject closer to it. The phrase 'one of the' + plural noun takes a singular verb, because the true subject is 'one', not the noun that follows."
      ],
      examples: [
        { text: "Neither the manager nor the employees were informed.", note: "The verb agrees with employees, the nearer subject." },
        { text: "One of my colleagues is from Brazil.", note: "One is the subject, so the verb is singular: is, not are." }
      ]
    },
    { heading: "Pronoun-antecedent agreement",
      body: [
        "A pronoun must agree in number with the noun it refers back to (its antecedent). Because everyone, everybody, and each are singular, a strictly formal style pairs them with singular pronouns (he or she, or a rewritten sentence); in everyday usage, they is now widely accepted as a natural singular pronoun for an unspecified or unknown gender."
      ]
    }
  ],
  mistakes: [
    { wrong: "The list of items on the shelf are long.", right: "The list of items on the shelf is long.", why: "The true subject is list (singular), not items — the verb agrees with list." },
    { wrong: "Everyone have their own opinion.", right: "Everyone has their own opinion.", why: "Everyone is grammatically singular and takes has, not have." },
    { wrong: "The team are playing well this season.", right: "The team is playing well this season.", why: "In standard American style, collective nouns like team take a singular verb when acting as one unit." }
  ],
  recap: [
    "The verb agrees with the true subject, even when other words come between them.",
    "Indefinite pronouns (everyone, everybody, each, either) are grammatically singular.",
    "With or/nor, the verb agrees with the nearer subject; 'one of the' + plural noun still takes a singular verb.",
    "Pronouns agree in number with their antecedent; they is widely accepted as a singular pronoun for unspecified gender."
  ]
},

{
  id: "modifiers", part: 5, number: 18, title: "Misplaced and Dangling Modifiers, and Relative Clauses",
  summary: "How word order changes meaning, and how relative clauses (who, which, that) attach extra information to a noun.",
  sections: [
    { heading: "Misplaced modifiers",
      body: [
        "A modifier should sit as close as possible to the word it describes; move it, and the sentence can end up describing something the writer never intended. This is especially true of limiting words like only, almost, and just, whose position can completely change a sentence's meaning."
      ],
      examples: [
        { text: "She only ate a sandwich for lunch.", note: "Implies: she ate nothing else, just a sandwich." },
        { text: "Only she ate a sandwich for lunch.", note: "Implies: nobody else did." }
      ]
    },
    { heading: "Dangling modifiers",
      body: [
        "A dangling modifier is an opening phrase that has no logical subject in the main clause to attach to, so it appears to describe the wrong thing — often producing an unintentionally funny result. Fix it by making sure the subject that immediately follows the phrase is the thing the phrase is actually describing."
      ],
      examples: [
        { text: "Walking to the station, the rain started to fall.", note: "As written, this says the rain was walking to the station." },
        { text: "Walking to the station, I got caught in the rain.", note: "Fixed: 'I' is now the subject the opening phrase logically describes." }
      ]
    },
    { heading: "Relative clauses",
      body: [
        "A relative clause adds extra information about a noun, introduced by a relative pronoun: who or that for people, which or that for things, whose for possession, and where/when for place and time. A defining (restrictive) relative clause identifies exactly which noun is meant and takes no commas; a non-defining (non-restrictive) clause adds extra, non-essential information and is set off with commas — and can only use which, never that, for things."
      ],
      examples: [
        { text: "The woman who called earlier left a message.", note: "Defining: identifies exactly which woman — no commas." },
        { text: "My car, which is quite old, still runs well.", note: "Non-defining: extra detail, set off with commas; which, not that." }
      ]
    }
  ],
  mistakes: [
    { wrong: "I almost drove my kids to school every day that year.", right: "I drove my kids to school almost every day that year.", why: "As originally placed, almost suggests the driving nearly didn't happen at all, rather than describing frequency (almost every day)." },
    { wrong: "Having finished the report, the printer broke down.", right: "Having finished the report, I found the printer had broken down.", why: "The printer didn't finish the report — the opening phrase needs a logical human subject right after it." },
    { wrong: "My car, that I bought last year, needs repairing.", right: "My car, which I bought last year, needs repairing.", why: "A non-defining clause (set off by commas) requires which for things, not that." }
  ],
  recap: [
    "Place modifiers, especially only/almost/just, directly next to the word they describe.",
    "A dangling modifier has no logical subject to attach to in the main clause — fix by supplying one right after the phrase.",
    "Defining relative clauses (no commas) identify which noun is meant; non-defining clauses (with commas) add extra detail and require which, not that, for things."
  ]
},

{
  id: "punctuation", part: 6, number: 19, title: "Punctuation",
  summary: "Commas, apostrophes, semicolons, colons, and quotation marks.",
  sections: [
    { heading: "Commas",
      body: [
        "Use a comma after an introductory word, phrase, or clause; between items in a list; before a coordinating conjunction joining two independent clauses; and around non-essential extra information (including non-defining relative clauses, covered in the previous chapter). Don't use a comma to join two independent clauses on its own — that's a comma splice, covered in the chapter on sentence types."
      ],
      examples: [
        { text: "After the meeting, we grabbed lunch.", note: "Comma after an introductory phrase." },
        { text: "I bought apples, bananas, and pears.", note: "Comma before 'and' in a list (the Oxford comma) — a stylistic choice, but a consistent one is best." }
      ]
    },
    { heading: "Apostrophes",
      body: [
        "An apostrophe shows possession (the dog's lead) or marks a missing letter in a contraction (don't = do not; it's = it is). It is never used simply to make a plain noun plural — 'apple's for sale' is a well-known and avoidable error."
      ]
    },
    { heading: "Semicolons and colons",
      body: [
        "A semicolon joins two closely related independent clauses without a conjunction, or separates items in a list that already contain commas. A colon introduces a list, an explanation, or an elaboration, and the clause before it must be a complete sentence on its own."
      ],
      examples: [
        { text: "I have a big test tomorrow; I can't go out tonight.", note: "Semicolon joining two related independent clauses." },
        { text: "You'll need three things: a pen, paper, and time.", note: "Colon introducing a list after a complete clause." }
      ]
    },
    { heading: "Quotation marks",
      body: [
        "Use quotation marks to mark someone's exact words. A comma or colon typically introduces the quotation, and in American style, commas and full stops go inside the closing quotation mark; question marks and exclamation marks go inside only if they belong to the quoted material itself."
      ],
      examples: [
        { text: "She said, \"I'll be there at noon.\"", note: "The full stop sits inside the closing quotation mark." }
      ]
    }
  ],
  mistakes: [
    { wrong: "The dogs bowl is empty.", right: "The dog's bowl is empty.", why: "Possession needs an apostrophe: the dog's bowl (one dog owning the bowl)." },
    { wrong: "I have a lot of work to do, I can't come tonight.", right: "I have a lot of work to do; I can't come tonight.", why: "This is a comma splice joining two independent clauses — use a semicolon, a full stop, or a comma plus a coordinating conjunction instead." },
    { wrong: "There's only one thing I want, success.", right: "There's only one thing I want: success.", why: "A colon, not a comma, introduces a single-item explanation or elaboration like this." }
  ],
  recap: [
    "Commas: after introductions, between list items, before a conjunction joining two full clauses, around non-essential extra detail.",
    "Apostrophes: possession and contractions only — never a plain plural.",
    "Semicolons join related independent clauses; colons introduce a list or explanation after a complete clause.",
    "In American style, commas and full stops sit inside closing quotation marks."
  ]
},

{
  id: "usage-style", part: 6, number: 20, title: "Commonly Confused Words and Style",
  summary: "Frequently confused word pairs, redundancy, parallelism, and matching your register to the situation.",
  sections: [
    { heading: "Frequently confused pairs",
      body: [
        "A short list of word pairs accounts for a disproportionate share of everyday writing errors, mostly because the words sound alike (homophones) or are close in meaning: affect (verb, to influence) vs. effect (noun, a result); fewer (countable nouns) vs. less (uncountable nouns); who's (contraction of who is) vs. whose (possessive); then (time) vs. than (comparison); and lie (recline) vs. lay (put something down), covered in the chapter on verbs."
      ],
      examples: [
        { text: "The news had a big effect on morale.", note: "Effect, the noun (a result)." },
        { text: "Loud music can affect your concentration.", note: "Affect, the verb (to influence)." },
        { text: "Fewer people came than expected.", note: "Fewer for countable people; than for comparison, not then." }
      ]
    },
    { heading: "Redundancy and wordiness",
      body: [
        "Redundant phrases repeat an idea that's already implied: 'free gift' (gifts are free by definition), 'past history', 'advance warning', 'each and every'. Trimming them makes writing tighter without losing meaning. Wordiness more broadly means using more words than necessary to express an idea — 'due to the fact that' can almost always become simply 'because'."
      ]
    },
    { heading: "Parallelism",
      body: [
        "Items joined in a list, or linked by a conjunction like and, or, or correlative pairs like both...and, should share the same grammatical form. Breaking parallelism doesn't just sound clumsy — in a numbered list or set of instructions it can genuinely obscure meaning."
      ],
      examples: [
        { text: "She likes hiking, swimming, and cycling.", note: "Parallel: three -ing forms." },
        { text: "She likes hiking, to swim, and cycling.", note: "Not parallel — 'to swim' breaks the pattern set by the other two." }
      ]
    },
    { heading: "Matching register to the situation",
      body: [
        "Register is the level of formality in language. Formal register avoids contractions and casual vocabulary, and favours precise, neutral word choice (ascertain rather than find out; numerous rather than loads of); informal register embraces contractions and colloquial phrasing. Neither is 'more correct' — the skill is choosing the one that fits the audience and context, and staying consistent within a single piece of writing."
      ]
    }
  ],
  mistakes: [
    { wrong: "There was less people than we expected.", right: "There were fewer people than we expected.", why: "People is countable, so fewer is needed, not less, which is for uncountable nouns." },
    { wrong: "The meeting will discuss about the budget.", right: "The meeting will discuss the budget.", why: "Discuss is directly transitive in English and doesn't take 'about' before its object." },
    { wrong: "The report was clear, concise, and it persuaded people.", right: "The report was clear, concise, and persuasive.", why: "For parallel structure, all three items in the list should be adjectives, matching clear and concise." }
  ],
  recap: [
    "Learn confused pairs (affect/effect, fewer/less, who's/whose, then/than) as fixed distinctions, not guesses.",
    "Cut redundant phrases (free gift, advance warning) and replace wordy constructions with plain ones.",
    "Keep items in a list or joined by a conjunction grammatically parallel.",
    "Match your register — formal or informal — to the situation, and stay consistent."
  ]
}
];