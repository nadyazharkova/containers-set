import Team from '..';

test('methhodAdd1', () => {
    const team = new Team();
    const mag = { name: 'mag' };
    team.add(mag);
    expect(team.members.size).toEqual(1);
});

test('methhodAdd2', () => {
    const team = new Team();
    const mag = { name: 'mag' };
    team.add(mag);
    expect(() => { team.add(mag); }).toThrow('Персонаж уже существует');
});

test('methodAddAll', () => {
    const team = new Team();
    const mag = { name: 'mag' };
    const zombie = { name: 'zombie' };
    const result = new Team();
    result.add(mag); result.add(zombie);
    team.addAll(mag, zombie);
    expect(team.members).toEqual(result.members);
});

test('testToArray', () => {
    const team = new Team();
    const mag = { name: 'mag' };
    const zombie = { name: 'zombie' };
    team.addAll(mag, zombie);
    const result = [
        { name: 'mag' }, { name: 'zombie' }
    ];
    expect(team.toArray()).toEqual(result);
});