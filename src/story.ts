export const storySteps = [
  { label: 'Before my visit', title: 'I can get ready for my visit.', paragraphs: ['I am going to visit the dentist. They help me look after my teeth.', 'I can look at this story with the person who is coming with me.'], sensory: 'We can ask the clinic for photos of the entrance, waiting room and dental room before we go.', scene: 'prepare' },
  { label: 'Arriving at the clinic', title: 'This is where my visit begins.', paragraphs: ['I arrive with the person who is coming with me.', 'We let the person at reception know we are here.'], sensory: 'I may hear people talking, phones ringing or a door opening. I can tell the person with me how I feel.', scene: 'clinic' },
  { label: 'Waiting for my turn', title: 'I wait until it is my turn.', paragraphs: ['We may sit in the waiting area for a little while.', 'Someone will let us know when it is time to go in.'], sensory: 'There may be other people and different sounds in the waiting area. We can ask the team what might help if waiting feels difficult.', scene: 'waiting' },
  { label: 'Meeting the dental team', title: 'I meet the people who will help me.', paragraphs: ['The dental team can tell me their names and what they do.', 'I can ask questions, or the person with me can help me ask.'], sensory: 'The team may wear gloves, masks and special clothes. I can ask them to explain what they are wearing.', scene: 'team' },
  { label: 'Seeing the chair and tools', title: 'I can get to know the dental room.', paragraphs: ['There is a special chair where I may sit. It can move up, down and back.', 'The team can show me the small mirror and other tools they may use.'], sensory: 'There may be a bright light above the chair. Some tools make sounds. I can ask to see or hear a tool before it is used.', scene: 'chair' },
  { label: 'During my checkup', title: 'The dentist looks at my teeth.', paragraphs: ['The dentist may ask me to open my mouth so they can look at my teeth.', 'They can explain what they would like to do next. My visit may be different from this story.'], sensory: 'A small mirror may touch my teeth or cheeks. Gloves may feel different. I can let the team know if something feels uncomfortable.', scene: 'mirror' },
  { label: 'Asking for help or a pause', title: 'I can let the team know how I feel.', paragraphs: ['We can agree with the team how I will ask for a pause, such as raising my hand.', 'I can ask questions or tell someone if I need help.'], sensory: 'Before we begin, we can practise the signal together and ask the team what will happen when I use it.', scene: 'pause' },
  { label: 'Finishing my visit', title: 'My visit comes to an end.', paragraphs: ['The dental team tells us when the appointment is finished.', 'They can explain what happens next to me and the person with me. Then we can say goodbye.'], sensory: 'We may go back to reception before leaving. We can ask the team to write down anything we need to remember.', scene: 'finish' },
] as const

export type Scene = typeof storySteps[number]['scene']
export const preparationTips = [
  ['Explore the story together', 'Look at one step at a time. Invite questions without rushing.'],
  ['Talk to the dental team', 'Share communication preferences and ask what support is available.'],
  ['Make a plan for pauses', 'Agree a way for your child to ask for help or a break with the team.'],
] as const
