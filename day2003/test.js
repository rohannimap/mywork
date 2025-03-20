try {
    throw new Error('my error');
 } catch (err) {
   console.error(err.message);
 } finally {
   console.error('finally');
 }