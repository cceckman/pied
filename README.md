# "Proud-pied"

RC Creative Coding, 2024-04-17


> From you have I been absent in the spring,  
> When proud pied April, dressed in all his trim,  
> Hath put a spirit of youth in every thing,  
> That heavy Saturn laughed and leapt with him.  
>
> Yet nor the lays of birds, nor the sweet smell  
> Of different flowers in odour and in hue,  
> Could make me any summer's story tell,  
> Or from their proud lap pluck them where they grew:  
>
> Nor did I wonder at the lily's white,  
> Nor praise the deep vermilion in the rose;  
> They were but sweet, but figures of delight,  
> Drawn after you, you pattern of all those.  
>
> Yet seemed it winter still, and you away,
> As with your shadow I with these did play.

The prompt for this week's Creative Coding, "proud-pied", was explicated as "gorgeously variegated".

_Variagated_ is a term familiar [to me](https://www.ravelry.com/projects/cceckman/comet);
it was used around my house a lot [growing up](https://edieeckman.com).

So, I took _variegated yarn_ as the inspiration.

`pied` draws a canvas with "stitches of varieagated yarn". Each "thread" is given:

- A random saturation
- A random value
- A random _starting_ hue
- A random _speed_ - how quickly its hue changes.

So, the threads are "variegated" by hue.

The renderer "stitches" the canvas by alternating each thread, one "stitch" per, down each column.
The threads gradually shift their hue according to their speed.

The renderer works in the round, picking up at the start of the next column where it left off in the last one.

I might add query parameters to change the stitch size and number of threads.
