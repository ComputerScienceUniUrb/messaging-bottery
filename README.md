# Bottery for messaging platforms

Port of [Bottery](https://github.com/google/bottery) by [Kate Compton](https://github.com/galaxykate) adapted for chatbots on modern messaging platforms.&nbsp;🤖

📃 This work will be presented at [CONVERSATION&nbsp;2018](https://conversations2018.wordpress.com/program/), on 26&nbsp;October&nbsp;2018 in Saint Petersburg.

The goal of the original Bottery system was to help *everyone*, including non-technical users, be able to write simple and engaging contextual conversational agents and to test them out in an interactive simulation.
This adaption of the system allows users to define conversational agents for messaging platforms and making them available online, while keeping true to the original focus on easy of use and accessibility to anybody.

The system is currently released as a *proof of concept* that makes Bottery agents communicate through a Telegram chatbot.

## Future work

The **first public release** will allow developers to easily deploy Bottery agents to chatbot platforms (including, at least, Telegram).

**Future releases** will introduce the following features:
* Extend Bottery's pattern matching, replicating partial `*` matches, replicating how categories are specified in AIML-based chatbots;
* Extend Bottery's pattern matching to use *Tracery* grammars “in reverse” (i.e., an input string matches if it can be generated by the grammar);
* Improve context-keeping providing facilities to perform “jumps” to agent states while keeping a stack-based memory, which will help splitting up agents into sub-procedures;
* Adding support for messaging platforms.

## Authors

* [Kate Compton](https://github.com/galaxykate): original [Bottery](https://github.com/google/bottery) implementation.
* [Alessio Ricci](https://github.com/RiccioAle)
* [Lorenz Cuno Klopfenstein](https://github.com/LorenzCK)
* [Saverio Delpriori](https://github.com/xavbeta)
