const arr=[
    {
        key :1,
        image : "https://s3-alpha-sig.figma.com/img/bda2/46d2/36afcad16255328adec6fbbe7f911150?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MjB1QYiU7zM2tlYAGEZ69x9td0JEBcniW3BduEganfit1cFWkJonLYZRamWf~ZBdqOpBNZiyDEsf935Ea0-C4VJkbkV~6L~xIzqSSkcZCQPi26a5ng4m-yzf74lWMFonB4QKo1mbtYdiT5IAU3YpbGlcAW1KmPsEAYkD-Q0xilmFRkRxZqjlxjwMRBk0xp91Y97F6wHLK~TakA4h3CzYp4bSpYCQ8HV9P-RcLOqJqgOPOwaFAjNM8SpnHldorocXna0gB14XvBvSAynxjriEsCdS4RL1lLBN~m54TB2TbxjSOA5GNbqKRXoGM10lUqcC8DhSZT35ZjUt33FaA9vyUA__",
        heading: "Exposure",
        info: "Our advanced spyware detection engine can identify if a device contains spyware or bugging software.",
    },
    {
        key :2,
        image : "https://s3-alpha-sig.figma.com/img/d3e6/26a7/2dda05c2cc5cd57147b221dbf02bd61e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLYPnGnw0TnMfljETaqFndsp-4VZxeOD753pl~Hf5EM--l3hT8ijRgeV2REacCtS7T1e5EHWyCX0rEfw9GmMtYW-mbPShlZ~cAOGqJltWPqRJjXqyWfOFpbJEexvDDSfodLjABKIHtsXQ8ipQC7gM8~lC3GZZHhgKs2J0LzDos6cPW-XDLIRSTtJtdKPG3vann83aaHOY33hdhviD~EvBwx3Nzx-tn6uuC2YrTI00canRw53kL3ApYDRpoGWbK7CehDendAAgOWU8M1zA2RCpQ69dGn0~zEOJCsd5X6HVGwbszEv2N2rUOvUJqqondUYCSjqSUjBGUUVRYaAnRy27Q__",
        heading: "R&D and Innovation",
        info: "Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).",
    },
    {
        key :3,
        image : "https://s3-alpha-sig.figma.com/img/bf63/3428/a49e28e97521415585253bd002a421f7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L~Iig9aLICN5HPtbiOSvIaZrujB71-Sc2dFmOWwdEGAGTicVoBncRN62MsdeMQT85BiuH1YKpuWJ5btTofNwhkFVNrInhlgpHZAesVSb5Xggm92MAmTsUxEeHIj4aSXUK6u2~b68lhNmDIDZl22YoyHVpIYDcWtUAAih9AgYvPh9o6KgHhvRFfJ7b5aO1SO7nCMvdsP1dMkW53h4mkhveKJ00GAOtBKmsjPyBtoAVpvAE~YwXtwR7vs5RH0RTiz2mwAh1J1dUxRa9W6hLqNDvtIDib33gDlwbxJ2emZuH5rkWc2Ibd4rWfzXaCMK71LY4MScCn08u3LZOgfd8dAU0Q__",
        heading: "Networking",
        info: "Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.",
    },
    {
        key :4,
        image : "https://s3-alpha-sig.figma.com/img/d3e1/a609/e136f8e7160d7b513f2e30e3fa6988aa?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GWlupJuHQB6z7eFXdfRPeBNbQLJ5-nDZP4ONfV68sySq59~8O9NGfdvw8kbOTdzRm2BapNeOzgjI5aFSo1Z~nJu7z9KrFcYt3HfTJPJbIe8m5iP3otkkWmnRH1nQS6giZykNOpl0YpdWuKz1XW0iaV6VwiZbibN7Bu0n60pzGUm~ZXCz0jLiZWrXADDJOxwmJBipwUjUBelidq5WWfJtBqGDlFFxVOpmvFFbXeBrHjAKKxX5SMjrOBt~cIrdqO8IthnY3SvuVA7rej4ur5WB3xs8w4LWEKy5f~JqimqB4uOcbtZcaLdy9o144ASRFPq0bOWQzE85dhLLfHtmUDufDw__",
        heading: "Enhancing Projects and education",
        info: "Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.",
    },
    {
        key :5,
        image : "https://s3-alpha-sig.figma.com/img/6843/633c/9744b699cfab294d33796b3d762fc06f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kN37g~Eh5YB-UlDEIhpzZ8kMv~HQR0WIfdhFnf0DfSNlQQvUUB1Ch2XMcKNeYBa7mcNPmMUhX5x1RdlOLL7~mHNBIFsmuqXl~UHHJHtQZT0~zNdxC2ZVABNElqHBtvz5sedodJsoKQv560fyiGSDuE2DjQ4EwwDAb1Kb~xifRaBV3VgSyMAo2CaGa9U-quaWjy7PIwLO3wgypN3K2dB5MKCU0AQbtiRqG5xpZJOIoLwEKI3~Hg9QR2MWkn~uZ3OsvL9JpM9WDpkFdosww9n8RHkj8v1pAOjopkiptfXWUuNivCyEk5dLYM1sPL12lHf7WH4h4NFKO5BH2NXNVbZUyg__",
        heading: "Opportunities",
        info: "Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.",
    },
    {
        key :6,
        image : "https://s3-alpha-sig.figma.com/img/ce34/33f5/93420436598895e01542ce5a03d704d4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EjgQHAG2Sy5WliJL18qU7ixFYxN~q46L4mNxBJcn2hj~VFcmZ7a7p-rd~5WF9W4Vi5m4hQaRD15ozHRpPwj-mq9W-~LvCt7CekFR0kXV-n6LTGERcUxpFfddvC0GzId-IkIWL8ymmQmUcdl0eZOSj2m7KCNFpsKSTq7cCyQ4n1uOCrF1RuWMM1PXFIM70-bWnjqDXcq5Ww~WtvSXR~EgO5e9UJhQQVPtDp48C8SXGvgtz66GAOhmmBRTrdvWFaqC6PiecKIIsgEwIRUGB9KYnETeWJDdW73XOKDZ4JgVFy87T53vEf~sLpd~AgheIx5HfLtzXs2YofW6kiXEiQR5Cg__",
        heading: "Practical Applications",
        info: "We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.",
    }
];

export default arr;