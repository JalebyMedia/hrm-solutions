callback({
  "levelNumber": 38,
  "size": 25,
  "steps": 365,
  "successRatio": 1,
  "author": "ocoss",
  "hash": "6b639736d5bf2cb80002e55a1594c623",
  "path": "38-Digit-Exploder-30.165/25.267-ocoss.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 38-Digit-Exploder - SIZE 25/30 - SPEED 267/165 --\n\na:\n    INBOX   \n    COPYTO   0\n    COPYTO   6\n    BUMPUP   10\nb:\nc:\n    COPYFROM 0\n    SUB      [10]\n    JUMPN    d\n    COPYTO   0\n    BUMPUP   9\n    JUMP     c\nd:\n    COPYFROM 6\n    SUB      [10]\n    JUMPN    e\n    COPYFROM 9\n    OUTBOX  \ne:\n    BUMPDN   10\n    SUB      10\n    COPYTO   9\n    COPYFROM [10]\n    JUMPZ    f\n    JUMP     b\nf:\n    COPYFROM 0\n    OUTBOX  \n    BUMPUP   10\n    JUMP     a\n\n\nDEFINE LABEL 0\neJzjZGBgWFW6pvd4zaa5F1uurQZyGQpasxsjmlg6rKs3zX1elriZYRSMglEwbAEAOIQPhw;\n\nDEFINE LABEL 6\neJwTYmBgOBG3LudRke1SzZpfO4Fchudlp7PySubnShb8K1eNmnwAJPayfdW6+d2fV6b3fV5pMDFx88QJ\n+/cydm8/96575oXXMx6fZqAQ8LVtmmvcorfsW1Pvhm9NHDv3t27Y196xYV9o/9T5EyeYTf0xeefalqnW\nx0yn1lxaOfnM3e19vK9sex6+edn+8A2ldo+CUTCSAQBsSUeM;\n\nDEFINE LABEL 9\neJxjY2BgEKstLqioMWitqBHfAeQyVNTc8WDAAfQaPobfr9cJ2Vpb6n+1fLLv+WLPoB0FR6NwqR8Fo2AU\nDG4AAI8KExs;\n\n"
});