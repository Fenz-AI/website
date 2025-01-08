---
title: 'Fudan University and others proposed the "Chinese version of GPT-Zero"! Graduation thesis AI self-checking tool｜AAAI 2025'
description: 'The AI content detector ImBD recently proposed by researchers from Fudan University and other institutions covers multi-task detection (polishing, expansion, rewriting, pure generation), and supports multiple mainstream languages such as English, Chinese, Spanish, Portuguese, etc.; it only requires 500 pairs of samples and 5 minutes of training time to surpass commercial detectors!'
date: '2024-01-02'
readTime: 30
author: 'Fenz AI Team'
tags: ['AI', 'Security']
published: true
slug: 'fudan-university-chinese-gpt-zero-graduation-thesis-ai-detection-tool-aaai-2025'

---

Nowadays, large language models (LLMs) have achieved near-human capabilities in the field of text generation.
However, as these models are widely used in text creation, their abuse in areas such as exams and academic papers has caused serious concern. Especially in the current scenario, users often do not rely entirely on AI to generate content, but use AI to modify and polish human-original content. This hybrid content brings unprecedented challenges to detection.


Traditional machine-generated text detection methods perform well in identifying pure AI-generated content, but often misjudge machine-revised text. This is because machine-revised texts usually only make minor changes to the original human text, and contain a large number of human-created features and domain-specific terms, which makes it difficult for traditional detection methods based on probability statistics to accurately identify.


Recently, research teams from Fudan University, South China University of Technology, Wuhan University, UCSD, UIUC and other institutions proposed an innovative detection framework ImBD (Imitate Before Detect), which cuts in from the perspective of "imitation": by first learning and imitating the writing style features of the machine (such as specific vocabulary preferences, sentence structures, etc.), and then detecting based on these features.


![paper](images/640.webp)

Paper address: https://arxiv.org/abs/2412.10432

Project homepage: https://machine-text-detection.github.io/ImBD

Code link: https://github.com/Jiaqi-Chen-00/ImBD