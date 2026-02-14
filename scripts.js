{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 CourierNewPSMT;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red70\green137\blue204;\red23\green23\blue23;\red202\green202\blue202;
\red212\green214\blue154;\red0\green0\blue0;\red140\green211\blue254;\red194\green126\blue101;\red167\green197\blue152;
\red183\green111\blue179;}
{\*\expandedcolortbl;;\cssrgb\c33725\c61176\c83922;\cssrgb\c11765\c11765\c11765;\cssrgb\c83137\c83137\c83137;
\cssrgb\c86275\c86275\c66667;\cssrgb\c0\c0\c0;\cssrgb\c61176\c86275\c99608;\cssrgb\c80784\c56863\c47059;\cssrgb\c70980\c80784\c65882;
\cssrgb\c77255\c52549\c75294;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl326\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
function\cf4  \cf5 changeText\cf4 ()\{
\f1\fs24 \cf6 \cb1 \

\f0\fs28 \cf4 \cb3 \'a0\'a0\'a0 \cf2 var\cf4  \cf7 textsArray\cf4  = [\cf8 "Text 1"\cf4 ,\cf8 "Text 2"\cf4 , \cf8 "Text 3"\cf4 , \cf8 "Text 4"\cf4 , \cf8 "Text 5"\cf4 ]
\f1\fs24 \cf6 \cb1 \

\f0\fs28 \cf4 \cb3 \'a0\'a0\'a0 \cf2 var\cf4  \cf7 number\cf4  = \cf5 getRandomNumberBetween\cf4 (\cf9 0\cf4 ,\cf7 textsArray\cf4 .\cf7 length\cf4  - \cf9 1\cf4 )
\f1\fs24 \cf6 \cb1 \

\f0\fs28 \cf4 \cb3 \'a0\'a0\'a0 \cf7 console\cf4 .\cf5 log\cf4 (\cf8 "Index: "\cf4 , \cf7 number\cf4 )
\f1\fs24 \cf6 \cb1 \

\f0\fs28 \cf4 \cb3 \'a0\'a0\'a0 \cf7 document\cf4 .\cf5 getElementById\cf4 (\cf8 "heading"\cf4 ).\cf7 innerHTML\cf4  = \cf7 textsArray\cf4 [\cf7 number\cf4 ];
\f1\fs24 \cf6 \cb1 \

\f0\fs28 \cf4 \cb3 \}
\f1\fs24 \cf6 \cb1 \
\

\f0\fs28 \cf2 \cb3 function\cf4  \cf5 getRandomNumberBetween\cf4 (\cf7 min\cf4 ,\cf7 max\cf4 )\{
\f1\fs24 \cf6 \cb1 \

\f0\fs28 \cf4 \cb3 \'a0\'a0\'a0 \cf10 return\cf4  \cf7 Math\cf4 .\cf5 floor\cf4 (\cf7 Math\cf4 .\cf5 random\cf4 ()*(\cf7 max\cf4 -\cf7 min\cf4 +\cf9 1\cf4 )+\cf7 min\cf4 );
\f1\fs24 \cf6 \cb1 \

\f0\fs28 \cf4 \cb3 \}
\f1\fs24 \cf6 \cb1 \
}