<?php
namespace App\Tests\Controller;

use Automattic\WooCommerce\Client;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase
{

    private $httpClient;

    protected function setUp() {
        parent::setUp();
        $this->httpClient = static::createClient();
    }

    public function testIndex_returns200()
    {
        $this->createWooCommerceClientMock()
            ->expects($this->once())
            ->method('get');

        $this->httpClient->request('GET', '/api/asd');

        $this->assertEquals(200, $this->httpClient->getResponse()->getStatusCode());
    }

    public function testIndex_returnsGivenSlug()
    {

        $this->createWooCommerceClientMock()
            ->expects($this->once())
            ->method('get')
            ->with("slug", []);

        $this->httpClient->request('GET', '/api/slug');
    }

    private function createWooCommerceClientMock()
    {
        $wooCommerceClientMock = $this->getMockBuilder(Client::class)->disableOriginalConstructor()->setMethods(['get'])->getMock();
        $this->httpClient->getContainer()->set('test.Automattic\WooCommerce\Client', $wooCommerceClientMock);
        return $wooCommerceClientMock;
    }
}