class Sorter
{
    constructor()
    {
        this.arr = [];
        this.comparator = function(a, b)
        {
            return a - b;
        }
    }

    add(element)
    {
        this.arr.push(element);
    }

    at(index)
    {
        return this.arr[index];
    }

    get length()
    {
        return this.arr.length;
    }

    toArray()
    {
        return this.arr.slice(0);
    }

    sort(indices)
    {
        const sortedIndices = indices.sort((x, y) => x - y);
        const elems = sortedIndices.map((val, i) => this.arr[val]);
        let sorteMap = elems.sort((x, y) => this.comparator(x, y));
        sortedIndices.forEach((ind, i) => this.arr[ind] = sorteMap[i]);
        return this.arr;
    }
    setComparator(compareFunction)
    {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;