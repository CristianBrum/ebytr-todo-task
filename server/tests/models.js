const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const {
  describe,
  it,
  before,
  after,
  beforeEach,
  afterEach,
} = require('mocha');
const { getConnection } = require('./mongoMockConnection');
const conn = require('../connection/connectionLocal');

const taskModel = require('../models/taskModel');

describe('Exibe todas as tarefas Criadas', () => {
  describe('quando existe uma tarefa criada', () => {
    const payload = { task: 'Testar o Projeto' };
    describe('a resposta', () => {
      before(async () => {
        const connectionMock = await getConnection();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
        await connectionMock.db('ebytr_tasks').collection('tasks').insertOne(payload);
      });

      after(() => {
        MongoClient.connect.restore();
      });

      it('retorna um objeto', async () => {
        const response = await taskModel.getAllTasks();
        expect(response).to.be.an('object');
      });

      it('a tarefa possui a chave "tasks"', async () => {
        const response = await taskModel.getAllTasks();
        expect(response).to.have.property('tasks');
      });

      it('a chave tasks é um array', async () => {
        const { tasks } = await taskModel.getAllTasks();
        expect(tasks).to.be.an('array');
      });

      it('o array contem um objeto', async () => {
        const { tasks } = await taskModel.getAllTasks();
        expect(tasks[0]).to.include.an('object');
      });

      it('o objeto contém a chave "id, task"', async () => {
        const { tasks } = await taskModel.getAllTasks();
        expect(tasks[0]).to.have.all.keys('_id', 'task');
      });
    });
  });
  describe('quando nao existe uma tarefa cadastrada', () => {
    describe('a resposta', () => {
      before(async () => {
        const connectionMock = await getConnection();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
        await connectionMock.db('ebytr_tasks').collection('tasks').deleteMany({});
      });

      after(() => {
        MongoClient.connect.restore();
      });

      it('retorna um objeto', async () => {
        const response = await taskModel.getAllTasks();
        expect(response).to.be.an('object');
      });

      it('o objeto possui a chave "tasks"', async () => {
        const response = await taskModel.getAllTasks();
        expect(response).to.have.property('tasks');
      });

      it('a chave tasks é um array', async () => {
        const { tasks } = await taskModel.getAllTasks();
        expect(tasks).to.be.an('array');
      });

      it('o array é vazio', async () => {
        const { tasks } = await taskModel.getAllTasks();
        const emptyArray = expect(tasks).to.be.empty;
        return emptyArray;
      });
    });
  });
});
