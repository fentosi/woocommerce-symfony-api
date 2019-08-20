<?php
namespace App\Tests\Controller;

use Automattic\WooCommerce\Client;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase
{


    /**
     * @var KernelBrowser
     */
    private  $httpClient;

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

    public function testIndex_callsWooCommerceAPI_withGivenPath()
    {

        $this->createWooCommerceClientMock()
            ->expects($this->once())
            ->method('get')
            ->with("slug", []);

        $this->httpClient->request('GET', '/api/slug');
    }

    public function testIndex_callsWooCommerceAPI_withGivenMethodAndSubmethod()
    {

        $this->createWooCommerceClientMock()
            ->expects($this->once())
            ->method('get')
            ->with("products/12/variations", []);

        $this->httpClient->request('GET', '/api/products/12/variations');
    }

    public function testIndex_callsWooCommerceAPI_withGivenPathAndParameters()
    {

        $this->createWooCommerceClientMock()
            ->expects($this->once())
            ->method('get')
            ->with("slug", ['asd' => 123]);

        $this->httpClient->request('GET', '/api/slug?asd=123');
    }

    private function createWooCommerceClientMock()
    {
        $wooCommerceClientMock = $this->getMockBuilder(Client::class)->disableOriginalConstructor()->setMethods(['get'])->getMock();
        $this->httpClient->getContainer()->set('test.Automattic\WooCommerce\Client', $wooCommerceClientMock);
        return $wooCommerceClientMock;
    }
}
